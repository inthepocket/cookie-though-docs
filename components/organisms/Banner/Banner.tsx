import Image from 'next/image';

import styles from './Banner.module.css';

import closedBanner from '@public/images/example-collapsed.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.teaser}>
        <Image
          src={closedBanner}
          alt="Closed banner"
          layout="responsive"
          loader={({ src }) => src}
        />
      </div>
    </div>
  );
};

export default Banner;
