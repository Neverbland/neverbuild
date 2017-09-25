import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

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

import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, nprogressCss, bootstrapGrid, styles)(
  Layout,
);
