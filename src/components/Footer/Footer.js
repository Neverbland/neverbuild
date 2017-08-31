import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';

import s from './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer}>
        <div className="container">
          <span className={s.text}>© Your Company</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">
            Home
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/admin">
            Admin
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">
            Privacy
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/not-found">
            Not Found
          </Link>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
