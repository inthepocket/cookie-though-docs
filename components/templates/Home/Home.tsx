import Head from 'next/head';

import styles from './Home.module.css';

import Footer from '@molecules/Footer';
import Banner from '@organisms/Banner';
import Features from '@organisms/Features';
import Hero from '@organisms/Hero';
import Navigation from '@organisms/Navigation';

const Home = () => {
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

      <Navigation />
      <main className={styles.main}>
        <div>
          <Hero />
          <Features />
        </div>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default Home;