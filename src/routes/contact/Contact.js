import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Contact.scss';

class Contact extends React.Component {
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

export default withStyles(s)(Contact);
