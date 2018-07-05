import Link from 'next/link';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: content;
  height: 120px;
`;

const Nav = styled.nav`
  display: inline-grid;
  grid-gap: 16px;
  grid-auto-flow: column;
`;

const Logo = styled.a`
  font-size: 24px;
  display: block;
`;

const Header = () => (
  <Wrapper>
    <Link href="/">
      <Logo>Neverbuild</Logo>
    </Link>
    <Nav>
      <HeaderLink name="Home" href="/" />
      <HeaderLink name="About" href="/about" />
    </Nav>
  </Wrapper>
);

export default Header;
