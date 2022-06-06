import Link from 'next/link';

import styles from './Header.module.css';

import Hamburger from '@atoms/Hamburger';
import Logo from '@atoms/Logo';
import ThemeToggle from '@atoms/ThemeToggle';

interface Props {
  id: string;
}

const Header = ({ id }: Props) => {
  return (
    <ul className={styles.header}>
      <li>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </li>
      <div className={styles.links}>
        <div className={styles.linksDesktop}>
          <li>Documentation</li>
          <li>GitHub</li>
        </div>
        <li>
          <ThemeToggle />
        </li>
        <li className={styles.hamburger}>
          <Hamburger id={id} />
        </li>
      </div>
    </ul>
  );
};

export default Header;
