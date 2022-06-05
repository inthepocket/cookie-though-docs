import styles from './Logo.module.css';

import LogoIcon from '@icons/logo.svg';

interface Props {
  isFooter?: boolean;
}

const Logo = ({ isFooter = false }: Props) => {
  return (
    <div className={`${styles.logo} ${isFooter ? styles.logoFooter : ''}`}>
      <LogoIcon />
      <span>cookie though</span>
    </div>
  );
};

export default Logo;
