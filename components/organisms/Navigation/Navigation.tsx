import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { forwardRef, useEffect } from 'react';

import styles from './Navigation.module.css';

import Header from '@molecules/Header';
import Menu from '@molecules/Menu';

interface Props {
  isDocs?: boolean;
}

const Navigation = forwardRef<HTMLElement, Props>(({ isDocs = false }, ref) => {
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
      <nav ref={ref} className={`${styles.navigation}  ${isDocs ? styles.navigationDocs : ''}`}>
        <Header id={id} />
        <Menu />
      </nav>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
