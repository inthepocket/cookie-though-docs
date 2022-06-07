import type { ReactNode } from 'react';

import Background from './Background';
import Content from './Content';
import styles from './Feature.module.css';
import Icon from './Icon';
import Tagline from './Tagline';

interface Props {
  children: ReactNode;
}

const Feature = ({ children }: Props) => {
  return (
    <li className={styles.feature}>
      <div className={styles.content}>{children}</div>
    </li>
  );
};

Feature.Content = Content;
Feature.Icon = Icon;
Feature.Tagline = Tagline;
Feature.Background = Background;

export default Feature;
