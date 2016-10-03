import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Shell from './js/shell'
import Home from './js/containers/home'

// eslint-disable-next-line
import './css/app.scss'
import 'file?name=[name].[ext]!./.htaccess'

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route component={Shell}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
  ),

  document.getElementById('root')
);
