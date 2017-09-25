import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

import s from './Admin.scss';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <p>...</p>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
