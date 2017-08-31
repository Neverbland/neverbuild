import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from '../Link';
import Navigation from '../Navigation';
import SVG from '../SVG';

import logo from './logo.svg';
import logoPng from './logo-small.png';
import logoPng2x from './logo-small@2x.png';

import s from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className="container">
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoPng}
              srcSet={`${logoPng2x} 2x`}
              width="38"
              height="38"
              alt="React"
              className={s.icon}
            />
            <SVG className={s.logo} glyph={logo} />
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
