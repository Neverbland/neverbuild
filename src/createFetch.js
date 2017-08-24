/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, { cookie }) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    // mode: baseUrl ? 'cors' : 'same-origin',
    // credentials: baseUrl ? 'include' : 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(cookie ? { Cookie: cookie } : null),
    },
  };

  return (url, options) => {
    if (url.indexOf('api.graphcms') > -1) {
      return fetch(`${url}`, {
        ...defaults,
        ...options,
        headers: {
          ...defaults.headers,
          ...(options && options.headers),
        },
      });
    }
    return fetch(url, options);
  };
}

export default createFetch;
