import type { ReactNode } from 'react';

import styles from './CallToAction.module.css';

interface Props {
  children: ReactNode;
  variant?: 'copy';
}

const CallToAction = ({ children, variant }: Props) => {
  return (
    <button
      className={`${styles.callToAction} ${variant === 'copy' ? styles.callToActionCopy : ''}`}
    >
      {children}
    </button>
  );
};

export default CallToAction;
