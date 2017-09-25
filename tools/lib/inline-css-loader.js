/**
 * https://github.com/kriasoft/react-starter-kit/pull/1132
 */

const path = require('path');
const loaderUtils = require('loader-utils');
const processCss = require('css-loader/lib/processCss');
const getImportPrefix = require('css-loader/lib/getImportPrefix');

module.exports = function loader(content, sourceMap) {
  const callback = this.async();
  const query = loaderUtils.getOptions(this) || {};
  const moduleMode = query.modules || query.module;

  const identName = JSON.stringify(
    loaderUtils.interpolateName(this, query.identName || '[hash]', {
      context: query.context || this.options.context,
      content,
    }),
  );

  let map = sourceMap;
  if (map !== null && typeof map !== 'string') {
    map = JSON.stringify(map);
  }

  processCss(
    content,
    map,
    {
      mode: moduleMode ? 'local' : 'global',
      from: loaderUtils.getRemainingRequest(this),
      to: loaderUtils.getCurrentRequest(this),
      query,
      minimize: this.minimize,
      loaderContext: this,
      resolve: () => {
        /* no-op */
      },
    },
    (err, result) => {
      if (err) {
        console.error(err);
        callback(err);
        return;
      }

      let cssAsString = JSON.stringify(result.source);

      // for importing CSS
      const importUrlPrefix = getImportPrefix(this, query);

      function importItemMatcher(item) {
        const match = result.importItemRegExp.exec(item);
        const idx = Number(match[1]);
        const importItem = result.importItems[idx];
        const importUrl = `${importUrlPrefix}${importItem.url}`;
        return (
          `" + require(${loaderUtils.stringifyRequest(this, importUrl)})` +
          `[${JSON.stringify(importItem.export)}] + "`
        );
      }

      cssAsString = cssAsString.replace(
        result.importItemRegExpG,
        importItemMatcher.bind(this),
      );
      if (query.url !== false) {
        cssAsString = cssAsString.replace(result.urlItemRegExpG, item => {
          const match = result.urlItemRegExp.exec(item);
          let idx = Number(match[1]);
          const urlItem = result.urlItems[idx];
          const url = urlItem.url;
          idx = url.indexOf('?#');
          if (idx < 0) {
            idx = url.indexOf('#');
          }
          let urlRequest;
          if (idx > 0) {
            // idx === 0 is catched by isUrlRequest
            // in cases like url('webfont.eot?#iefix')
            urlRequest = url.substr(0, idx);
            return (
              `" + require(${loaderUtils.stringifyRequest(
                this,
                urlRequest,
              )}) + "` + `${url.substr(idx)}`
            );
          }
          urlRequest = url;
          return `" + require(${loaderUtils.stringifyRequest(
            this,
            urlRequest,
          )}) + "`;
        });
      }

      if (query.sourceMap && result.map) {
        // add a SourceMap
        map = result.map;
        if (map.sources) {
          map.sources = map.sources.map(source => {
            let p = path
              .relative(
                query.context || this.options.context,
                source.split('!').pop(),
              )
              .replace(/\\/g, '/');
            if (p.indexOf('../') !== 0) {
              p = `./${p}`;
            }
            return `/${p}`;
          }, this);
          map.sourceRoot = 'webpack://';
        }
        map.file = map.file.split('!').pop();
        const sourceURL = path.relative(
          query.context || this.options.context,
          this.resourcePath,
        );
        cssAsString += ` + "\\n/*# sourceURL=${map.sourceRoot}${sourceURL}*/"`;
        cssAsString += ` + "\\n/*# sourceMappingURL=data:application/json;base64,${new Buffer(
          JSON.stringify(map),
        ).toString('base64')}*/"`;
      }

      const locals = Object.keys(result.exports).reduce((res, key) => {
        let valueAsString = JSON.stringify(result.exports[key]);
        valueAsString = valueAsString.replace(
          result.importItemRegExpG,
          importItemMatcher,
        );
        res.push(`${JSON.stringify(key)}: ${valueAsString}`);
        return res;
      }, []);

      // embed runtime
      callback(
        null,
        `var style = { id: ${identName}, cssText: ${cssAsString} };\n\n` +
          'module.exports = {\n' +
          `  ${locals.join(',\n  ')}\n` +
          '};\n' +
          'module.exports.getCss = function () { return style; };',
      );
    },
  );
};
