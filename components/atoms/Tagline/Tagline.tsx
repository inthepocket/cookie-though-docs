import type { ReactHTML, ReactNode } from 'react';
import { forwardRef, createElement } from 'react';

import styles from './Tagline.module.css';

interface Props {
  type: keyof ReactHTML;
  variant: 'hero' | 'feature';
  children: ReactNode;
}

const Tagline = forwardRef<HTMLElement, Props>(({ type, variant, children }, ref) => {
  return createElement(type, { className: styles[`tagline-${variant}`], ref }, children);
});

Tagline.displayName = 'Tagline';

export default Tagline;
