// Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'containers/Home';
import Missing from 'containers/Missing';
// Styles
import 'css/app.scss';
import styles from 'css/containers/shell.scss';

const App = () => (
  <div className={styles.shell}>
    <Route component={Header} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/404" component={Missing} />
      <Redirect from="*" to="/404" />
    </Switch>
    <Route component={Footer} />
  </div>
);

export default App;
