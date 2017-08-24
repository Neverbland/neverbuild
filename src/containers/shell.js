import React, { Component } from 'react';

import Header from '../components/header';

class Shell extends Component {
  componentWillMount() {
    // Code goes here...
  }
  render() {
    return (
      <div className="shell">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Shell;
