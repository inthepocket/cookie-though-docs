import type { ReactNode } from 'react';

import styles from './Icon.module.css';

interface Props {
  icon: ReactNode;
}

const Icon = ({ icon }: Props) => {
  return <div className={styles.icon}>{icon}</div>;
};

export default Icon;
