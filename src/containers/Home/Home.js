// Dependencies
import React from 'react';
// Components
import Intro from 'components/Intro/Intro';
import Icon from 'components/Icon/Icon';
// Styles
import styles from './Home.scss';
// Assets
import logo from '../../images/logo.svg';
import spriteLogo from '../../images/sprite/spriteLogo.svg';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.homeHeader}>
      <img src={logo} className={styles.homeLogo} alt="logo" />
      <Icon glyph={spriteLogo} />
      <h2>Welcome to Neverbuild</h2>
    </div>
    <Intro />
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

export default Home;
