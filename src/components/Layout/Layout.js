import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

// Components
import Header from 'components/Header';
import Feedback from 'components/Feedback';
import Footer from 'components/Footer';

/**
 *  Import any globally applicable styles here so they're NOT turned
 *   into CSS modules, and compose them into withStyles() below.
 *
 *  Try not to import the whole of bootstrap - it's huge.
 *   Usually the grid is enough.
 */
import normalizeCss from 'normalize.css';
import nprogressCss from 'nprogress/nprogress.css';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';

import styles from './Layout.scss';

class Layout extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header path={this.props.path} />
        {this.props.children}
        <Feedback />
        <Footer currentUrl={this.props.path} />
      </div>
    );
  }
}

export default withStyles(normalizeCss, nprogressCss, bootstrapGrid, styles)(
  Layout,
);
