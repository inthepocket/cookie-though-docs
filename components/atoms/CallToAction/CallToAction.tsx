import type { ReactNode } from 'react';

import styles from './CallToAction.module.css';

interface Props {
  children: ReactNode;
}

const CallToAction = ({ children }: Props) => {
  return <button className={styles.callToAction}>{children}</button>;
};

export default CallToAction;
