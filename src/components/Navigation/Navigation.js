import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'components/withStyles';
import Link from 'components/Link';

import s from './Navigation.scss';

// Navigation items
import list from './navigation.json';

class Navigation extends Component {
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

    return <nav className={s.nav}>{nav}</nav>;
  }
}

export default withStyles(s)(Navigation);
