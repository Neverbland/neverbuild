import Head from '../components/Head';
import styled from 'styled-components';
import Placeholder from '../components/Placeholder';

const Main = styled.main`
  grid-column: content;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 24px;
`;

export default () => (
  <Main>
    <Head title="About" />
    <Placeholder
      columns="1 / 9"
      rows="1 / 2"
    />
    <Placeholder
      columns="9 / 13"
      rows="1 / 4"
    />
    <Placeholder
      columns="1 / 9"
      rows="2 / 3"
    />
    <Placeholder
      columns="1 / 9"
      rows="3 / 4"
    />
    <Placeholder
      columns="1 / 9"
      rows="4 / 5"
    />
  </Main>
);
