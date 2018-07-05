import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import getGlobalStyles from '../utils/styling/global';
import theme from '../utils/styling/theme';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: getGlobalStyles(theme) }} />
          {this.props.styleTags}
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: sprite.stringify() }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
