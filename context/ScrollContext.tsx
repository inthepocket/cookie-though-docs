import type { ReactNode } from 'react';
import { createContext, useCallback, useEffect, useState } from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({ scrollY: 0 });

interface Params {
  children: ReactNode;
}

const ScrollObserver = ({ children }: Params) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
};

export default ScrollObserver;