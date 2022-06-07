import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@molecules/Footer';
import Features from '@organisms/Features';
import Hero from '@organisms/Hero';
import Navigation from '@organisms/Navigation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cookie Though</title>
        <meta
          name="description"
          content="Easy to use, minimal footprint application that manages cookie preferences. So delicious, you'll never need another library again."
        />
      </Head>

      <Navigation />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
