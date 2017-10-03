import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';

// Components
import Header from 'components/Header';
import Feedback from 'components/Feedback';
import Footer from 'components/Footer';

// Transition
import Fade from 'components/Layout/Fade';

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

// Transition duration
const duration = 300;

class Layout extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      in: true,
      children: props.children,
    };
  }

  componentWillReceiveProps(newProps) {
    const { children: newChildren } = newProps;

    if (newChildren !== this.state.children) {
      // Capture current content,
      //  and fade it out.
      this.setState({
        children: this.props.children,
        in: false,
      });

      // Wait for the content to fade out,
      //  and then swap it, and fade it back in.
      const that = this;
      setTimeout(() => {
        that.setState({
          children: newChildren,
          in: true,
        });
      }, duration);
    }
  }

  render() {
    return (
      <div>
        <Header path={this.props.path} />
        <Fade timeout={duration} in={this.state.in}>
          {this.state.children}
        </Fade>
        <Feedback />
        <Footer currentUrl={this.props.path} />
      </div>
    );
  }
}

export default withStyles(normalizeCss, nprogressCss, bootstrapGrid, styles)(
  Layout,
);
