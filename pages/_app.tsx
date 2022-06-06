import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ScrollObserver from '@context/ScrollContext';

function MyApp({ Component, pageProps }: AppProps) {
  const isDocsPage = useRouter().pathname.includes('/docs');

  if (isDocsPage) {
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>;
  }

  return (
    <ThemeProvider>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </ThemeProvider>
  );
}

export default MyApp;
