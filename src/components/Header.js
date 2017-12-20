// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from 'styles/components/header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link className={styles.logo} to="/">
        Neverbuild
      </Link>
      <nav className={styles.nav}>
        <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        <a href="https://palmer.chat">Community Slack</a>
      </nav>
    </div>
  </header>
);

export default Header;
