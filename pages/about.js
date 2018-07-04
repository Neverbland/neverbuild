import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  grid-column: content;
`;

export default () => (
  <Main>
    <Head>
      <title>About | Neverbuild</title>
      <meta
        property="og:title"
        content="About | Neverbuild"
      />
    </Head>
    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(10)}
  </Main>
);
