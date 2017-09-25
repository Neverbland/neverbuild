import React from 'react';
import classnames from 'classnames';
import withStyles from 'components/withStyles';
import Link from '../Link';

import s from './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={s.nav}>
        <Link className={s.link} to="/about">
          About
        </Link>
        <Link className={s.link} to="/contact">
          Contact
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">
          Log in
        </Link>
        <span className={s.spacer}>or</span>
        <Link className={classnames(s.link, s.highlight)} to="/register">
          Sign up
        </Link>
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);
