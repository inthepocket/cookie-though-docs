import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { FeaturesContext } from '../Features';

import Background from './Background';
import Content from './Content';
import styles from './Feature.module.css';
import Icon from './Icon';
import Tagline from './Tagline';

interface Props {
  index: number;
  children: ReactNode;
}

export const ProgressContext = createContext(0);

const Feature = ({ index, children }: Props) => {
  const { numberOfFeatures, currentFeature } = useContext(FeaturesContext);
  const progress = Math.max(0, currentFeature - index);
  const opacity =
    0.85 < progress && index < numberOfFeatures - 1
      ? Math.max(0, (1 - progress) * 4)
      : Math.min(1, Math.max(0, progress * 4));

  return (
    <ProgressContext.Provider value={progress}>
      <li className={styles.feature}>
        <div
          className={styles.content}
          style={{ pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined, opacity }}
        >
          {children}
        </div>
      </li>
    </ProgressContext.Provider>
  );
};

Feature.Content = Content;
Feature.Icon = Icon;
Feature.Tagline = Tagline;
Feature.Background = Background;

export default Feature;
