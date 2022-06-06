import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent } from 'react';

import styles from './Hero.module.css';

import CallToAction from '@atoms/CallToAction';
import Tagline from '@atoms/Tagline';
import ArrowDown from '@icons/arrow-down.svg';
import ArrowRight from '@icons/arrow-right.svg';
import Copy from '@icons/copy.svg';
import closedBanner from '@public/images/example-collapsed.png';

const Hero = () => {
  const scrollToFeatures = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Tagline type="h1" variant="hero">
          User consent
          <br />
          <strong>Made delicious</strong>
        </Tagline>
        <p className={styles.description}>
          With Cookie Though you can ask users for consent in a GDPR compliant way, without
          sacrificing usability. And the best part? It&apos;s open source.
        </p>
        <ul className={styles.callToActions}>
          <li>
            <CallToAction>
              See it in action
              <ArrowRight />
            </CallToAction>
          </li>
          <li>
            <CallToAction variant="copy">
              npm install --save cookie-though
              <Copy />
            </CallToAction>
          </li>
        </ul>
      </div>
      <div className={styles.background}>
        <div className={styles.teaser}>
          <Image
            src={closedBanner}
            alt="Closed banner"
            layout="responsive"
            loader={({ src }) => src}
          />
        </div>
      </div>
      <div className={styles.scrollDown}>
        <Link href="#features">
          <a onClick={scrollToFeatures}>
            <ArrowDown />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
