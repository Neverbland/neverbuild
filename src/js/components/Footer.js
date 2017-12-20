// Dependencies
import React from 'react';
// Components
import Icon from 'components/Icon';
// Styles
import styles from 'styles/components/footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <a href="http://neverbland.com/">
      <Icon className={styles.logo} glyph={require('images/sprite/logo.svg')} />
    </a>
  </footer>
);

export default Footer;
