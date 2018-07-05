import App, { Container } from 'next/app';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

import theme from '../utils/styling/theme';

const SiteWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns:
    [edge-start] minmax(16px, 1fr) [content-start] minmax(0, 1200px)
    [content-end] minmax(16px, 1fr) [edge-end];
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <SiteWrapper>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </SiteWrapper>
        </Container>
      </ThemeProvider>
    );
  }
}
