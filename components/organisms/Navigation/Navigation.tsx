import styles from './Navigation.module.css';

import Header from '@molecules/Header';
import Menu from '@molecules/Menu';

const Navigation = () => {
  const id = 'navigation-menu';

  return (
    <>
      <input
        id={id}
        className={`sr-only ${styles.toggleMenu}`}
        type="checkbox"
        aria-hidden
        role="button"
      />
      <nav className={styles.navigation}>
        <Header id={id} />
        <Menu />
      </nav>
    </>
  );
};

export default Navigation;
