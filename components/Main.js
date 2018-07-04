import styled from 'styled-components';

const Main = styled.main`
  grid-column: content;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 24px;
`;

export default Main;
