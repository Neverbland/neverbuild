import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Transition from 'react-transition-group/Transition';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class Fade extends Component {
  static propTypes = {
    in: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    timeout: PropTypes.number.isRequired,
  };

  render() {
    const { in: inProp, timeout: duration, children } = this.props;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
    };

    return (
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    );
  }
}

export default Fade;
