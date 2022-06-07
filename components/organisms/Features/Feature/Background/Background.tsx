import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import styles from './Background.module.css';

interface Props {
  src: StaticImageData;
}

const Background = ({ src }: Props) => {
  return (
    <div className={styles.background}>
      <div className={styles.image}>
        <Image src={src} alt="" layout="responsive" loader={({ src }) => src} />
      </div>
    </div>
  );
};

export default Background;
