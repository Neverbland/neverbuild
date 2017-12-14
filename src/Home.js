import React from 'react';
import logo from './logo.svg';
import styles from './Home.scss';

class Home {
  render() {
    console.log(styles);
    return (
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <img src={logo} className={styles.homeLogo} alt="logo" />
          <h2>Welcome to Razzle dsfasf</h2>
        </div>
        <p className={styles.homeIntro}>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className={styles.homeResources}>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
