import type { ReactNode } from 'react';

import styles from './Content.module.css';

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
