import Head from 'next/head';
import { useLayoutEffect, useRef } from 'react';

import styles from './Home.module.css';

import Footer from '@molecules/Footer';
import Banner from '@organisms/Banner';
import Features from '@organisms/Features';
import Hero from '@organisms/Hero';
import Navigation from '@organisms/Navigation';

const Home = () => {
  const navigationRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.add(styles.scrollSnap);

    return () => html.removeAttribute('class');
  }, []);

  return (
    <>
      <Head>
        <title>Cookie Though</title>
        <meta
          name="description"
          content="Easy to use, minimal footprint application that manages cookie preferences. So delicious, you'll never need another library again."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.gradient}>
        <div className={styles.blur} />
      </div>
      <Navigation ref={navigationRef} />
      <main id="main" className={styles.main}>
        <div>
          <Hero navigationRef={navigationRef} />
          <Features />
        </div>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
