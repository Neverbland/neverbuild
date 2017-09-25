import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

import s from './Page.scss';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className="container">
        <h1>{title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}

export default withStyles(s)(Page);
