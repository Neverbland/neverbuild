// Components
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  grid-column: edge;
  margin-top: 24px;
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
