import styled from 'styled-components';
import Head from '../components/Head';

const Main = styled.main`
  grid-column: content;
`;

export default () => (
  <Main>
    <Head />
    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(10)}
  </Main>
);
