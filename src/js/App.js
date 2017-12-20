// Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
// Styles
import 'css/app.scss';
import styles from 'css/containers/shell.scss';

const App = ({ routes, initialData }) => {
  return routes ? (
    <div className={styles.shell}>
      <Route component={Header} />
      <Switch>
        {routes.map((route, index) => {
          // pass in the initialData from the server or window.DATA for this
          // specific route
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props =>
                React.createElement(route.component, {
                  ...props,
                  initialData: initialData[index] || null
                })
              }
            />
          );
        })}
        <Redirect from="*" to="/404" />
      </Switch>
      <Route component={Footer} />
    </div>
  ) : null;
};

export default App;
