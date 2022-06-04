import Link from 'next/link';

import ThemeToggle from '../../atoms/ThemeToggle';

import styles from './Header.module.css';

import Hamburger from '@atoms/Hamburger';
import Logo from '@atoms/Logo';

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
      <li className={styles.links}>
        <ThemeToggle />
        <Hamburger id={id} />
      </li>
    </ul>
  );
};

export default Header;
