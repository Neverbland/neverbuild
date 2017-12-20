// Dependencies
import React from 'react';
// Styles
import styles from 'css/containers/home.scss';
// Components
import withSSR from '../HOC/withSSR';

class Home extends React.Component {
  // This works similarly to Next.js's `getInitialProps`
  static getInitialData() {
    return fetch('http://hipsterjesus.com/api/')
      .then(res => res.json())
      .then(res => ({ text: res.text }));
  }
  render() {
    const { isLoading, text, error } = this.props;
    return (
      <main className={styles.home}>
        <div className={styles.homeInner}>
          <h1>Home</h1>
          {isLoading && <div>Loading... </div>}
          {error && (
            <div style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</div>
          )}
          {text && <div>{text}</div>}
        </div>
      </main>
    );
  }
}

export default withSSR(Home);
