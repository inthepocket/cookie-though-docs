import styles from './Logo.module.css';

import LogoIcon from '@icons/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <span>cookie though</span>
    </div>
  );
};

export default Logo;
