import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

// Components
import Navigation from 'components/Navigation';
import Link from 'components/Link';
import SVG from 'components/SVG';

// Assets
import logo from './logo.svg';
import logoPng from './logo-small.png';
import logoPng2x from './logo-small@2x.png';

import s from './Header.scss';

class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className="container">
          <Navigation currentUrl={this.props.path} />
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
