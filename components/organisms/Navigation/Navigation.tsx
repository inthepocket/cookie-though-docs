import type { ChangeEvent } from 'react';

import styles from './Navigation.module.css';

import Header from '@molecules/Header';
import Menu from '@molecules/Menu';

interface Props {
  isDocs?: boolean;
}

const Navigation = ({ isDocs = false }: Props) => {
  const id = 'navigation-menu';

  const handleChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const body = document.body;

    return checked ? (body.style.overflow = 'hidden') : body.removeAttribute('style');
  };

  return (
    <>
      <input
        id={id}
        className={`sr-only ${styles.toggleMenu}`}
        type="checkbox"
        aria-hidden
        role="button"
        onChange={handleChange}
      />
      <nav className={styles.navigation}>
        <Header id={id} isDocs={isDocs} />
        <Menu />
      </nav>
    </>
  );
};

export default Navigation;
