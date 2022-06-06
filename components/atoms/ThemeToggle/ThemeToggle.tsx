import { useTheme } from 'next-themes';
import type { ChangeEvent } from 'react';

import styles from './ThemeToggle.module.css';

import Moon from '@icons/moon.svg';
import Sun from '@icons/sun.svg';

const ThemeToggle = () => {
  const id = 'theme-toggle';
  const { theme, setTheme } = useTheme();

  const handleChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={theme === 'dark'}
        onChange={handleChange}
        aria-hidden
      />
      <label htmlFor={id} className={styles.themeToggle} role="button" aria-label="Toggle theme">
        <div className={styles.icon}>
          <Sun />
          <Moon />
        </div>
      </label>
    </>
  );
};

export default ThemeToggle;
