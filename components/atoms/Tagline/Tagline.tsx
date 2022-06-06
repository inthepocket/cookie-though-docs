import type { ReactHTML, ReactNode } from 'react';
import { createElement } from 'react';

import styles from './Tagline.module.css';

interface Props {
  type: keyof ReactHTML;
  variant: 'hero' | 'feature';
  children: ReactNode;
}

const Tagline = ({ type, variant, children }: Props) => {
  return createElement(type, { className: styles[`tagline-${variant}`] }, children);
};

export default Tagline;
