import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'components/withStyles';
import Link from 'components/Link';

import s from './Footer.scss';

// Navigation items
import list from './navigation.json';

class Footer extends Component {
  static propTypes = {
    currentUrl: PropTypes.string.isRequired,
  };

  render() {
    const { currentUrl } = this.props;

    const nav = list.map(item => {
      const isActive = item.url === currentUrl;

      return (
        <Link
          to={item.url}
          key={item.url}
          className={classnames({
            [s.active]: isActive,
            [s.link]: true,
          })}
        >
          {item.name}
        </Link>
      );
    });

    return (
      <footer className={s.footer}>
        <div className="container">
          <span className={s.text}>
            © {new Date().getFullYear()} Neverbland
          </span>
          <span className={s.spacer}>·</span>
          {nav}
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
