import Head from '../components/Head';
import styled from 'styled-components';

const Main = styled.main`
  grid-column: content;
`;

export default () => (
  <Main>
    <Head title="About" />
    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(10)}
  </Main>
);
