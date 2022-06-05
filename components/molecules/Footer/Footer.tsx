import styles from './Footer.module.css';

import Logo from '@atoms/Logo';
import InThePocket from '@icons/itp-logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.inthepocket.com" target="_blank" rel="noreferrer noopener">
        <Logo isFooter />
        <span className={styles.by}>
          <span>By</span>
          <div className={styles.inThePocket}>
            <InThePocket />
          </div>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
