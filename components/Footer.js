// Components
import Icon from './Icon';
import styled from 'styled-components';
import { black } from '../utils/styling/colors';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${black};
  height: 96px;
  grid-column: edge;
`;

const Logo = styled(Icon)`
  height: 24px;
  color: white;
`;

const Footer = () => (
  <Wrapper>
    <Logo glyph={require('../static/images/sprite/logo.svg')} />
  </Wrapper>
);

export default Footer;
