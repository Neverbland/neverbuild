import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <Head>{this.props.styleTags}</Head>
        <title>Neverbuild</title>
        <meta
          name="theme-color"
          content="#212121"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* https://css-tricks.com/essential-meta-tags-social-media/ */}
        <meta
          property="og:title"
          content="Neverbuild"
        />
        <meta
          property="og:description"
          content="Kickstart Neverbland front-end projects"
        />
        <meta
          property="og:image"
          content="http://example.com/open-graph.png"
        />
        <meta
          property="og:url"
          content="http://example.com"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Kickstart Neverbland front-end project"
        />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
