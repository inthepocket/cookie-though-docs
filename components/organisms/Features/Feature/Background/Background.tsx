import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useContext } from 'react';

import { ProgressContext } from '../Feature';

import styles from './Background.module.css';

interface Props {
  src: StaticImageData;
}

const Background = ({ src }: Props) => {
  const progress = useContext(ProgressContext);
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div className={styles.background} style={{ transform: `translateY(${translateY}px)` }}>
      <div className={styles.image}>
        <Image src={src} alt="" layout="responsive" loader={({ src }) => src} />
      </div>
    </div>
  );
};

export default Background;
