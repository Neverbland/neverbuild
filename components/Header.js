import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: content;
`;

const Nav = styled.nav`
  display: inline-grid;
  grid-gap: 16px;
  grid-auto-flow: column;
`;

const Header = () => (
  <Wrapper>
    <h1>Neverbuild</h1>
    <Nav>
      <HeaderLink
        name="Home"
        href="/"
      />
      <HeaderLink
        name="About"
        href="/about"
      />
    </Nav>
  </Wrapper>
);

export default Header;
