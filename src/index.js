import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Shell from './js/containers/shell';
import Home from './js/containers/home';
import Blog from './js/containers/blog';
import Article from './js/containers/article';
import Contact from './js/containers/contact';

require('isomorphic-fetch');

// eslint-disable-next-line
import './css/app.scss';
// eslint-disable-next-line
import 'file?name=[name].[ext]!./.htaccess';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Shell}>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="blog/:guid" component={Article} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
