import styled from 'styled-components';
import Head from '../components/Head';
import Placeholder from '../components/Placeholder';

const Main = styled.main`
  grid-column: content;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 24px;
`;

export default () => (
  <Main>
    <Head />
    {[...Array(12)].map(i => (<Placeholder
      key={i}
      columns="span 4"
    />))}
  </Main>
);
