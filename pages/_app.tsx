import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import ScrollObserver from '@context/ScrollContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </ThemeProvider>
  );
}

export default MyApp;
