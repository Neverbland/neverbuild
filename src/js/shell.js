import React, { Component } from 'react'

import Header from './components/header'

class Shell extends Component {
  render() {
    return (
      <div className="shell">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Shell

