import React from 'react';
import Icon from './icon';
import { Link } from 'react-router';

import logo from '../../images/sprite/logo.svg';

const Header = () => (
  <header>
    <Icon glyph={logo} />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
