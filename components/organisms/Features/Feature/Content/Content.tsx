import type { ReactNode } from 'react';
import { useContext } from 'react';

import { ProgressContext } from '../Feature';

import styles from './Content.module.css';

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  const progress = useContext(ProgressContext);
  const translateY =
    0.85 < progress
      ? Math.max(-50, -(progress - 0.85) * 2 * 50)
      : Math.max(0, 50 - progress * 3 * 50);

  return (
    <div className={styles.content} style={{ transform: `translateY(${translateY}px)` }}>
      {children}
    </div>
  );
};

export default Content;
