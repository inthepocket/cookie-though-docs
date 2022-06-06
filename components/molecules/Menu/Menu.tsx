import Link from 'next/link';

import styles from './Menu.module.css';

import Footer from '@molecules/Footer';

const Menu = () => {
  return (
    <div className={`menu ${styles.menu}`}>
      <div>
        <dl className={styles.menuList}>
          <dt>Documentation</dt>
          <div>
            <dd>
              <Link href="/docs/installation">
                <a>Installation</a>
              </Link>
            </dd>
            <dd>
              <Link href="/docs/configuration">
                <a>Configuration</a>
              </Link>
            </dd>
            <dd>
              <Link href="/docs/styling">
                <a>Styling</a>
              </Link>
            </dd>
            <dd>
              <Link href="/docs/api">
                <a>API</a>
              </Link>
            </dd>
          </div>
        </dl>
        <dl className={styles.menuList}>
          <dt>Community</dt>
          <div>
            <dd>
              <Link href="/docs/development">
                <a>Development</a>
              </Link>
            </dd>
            <dd>
              <Link href="/docs/contributing">
                <a>Contributing</a>
              </Link>
            </dd>
            <dd>
              <a
                href="https://github.com/inthepocket/cookie-though"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
