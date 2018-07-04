// Components
import styled from 'styled-components';

const Placeholder = styled.div`
  background: #eee;
  min-height: 240px;
  grid-column: 1 / -1;
  @media (min-width: 800px) {
    grid-column: ${props => props.columns};
    grid-row: ${props => props.rows};
  }
`;

export default Placeholder;
