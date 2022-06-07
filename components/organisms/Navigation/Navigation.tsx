import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useEffect } from 'react';

import styles from './Navigation.module.css';

import Header from '@molecules/Header';
import Menu from '@molecules/Menu';

interface Props {
  isDocs?: boolean;
}

const Navigation = ({ isDocs = false }: Props) => {
  const router = useRouter();
  const id = 'navigation-menu';

  const handleChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const body = document.body;

    return checked ? (body.style.overflow = 'hidden') : body.removeAttribute('style');
  };

  useEffect(() => {
    const handleStart = () => document.body.removeAttribute('style');

    router.events.on('routeChangeStart', handleStart);

    return () => router.events.off('routeChangeStart', handleStart);
  }, [router.events]);

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
      <nav className={`${styles.navigation}  ${isDocs ? styles.navigationDocs : ''}`}>
        <Header id={id} />
        <Menu />
      </nav>
    </>
  );
};

export default Navigation;
