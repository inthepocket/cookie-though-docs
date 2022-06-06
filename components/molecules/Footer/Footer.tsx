import Link from 'next/link';

import styles from './Footer.module.css';

import Logo from '@atoms/Logo';
import InThePocket from '@icons/itp-logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.inthepocket.com" target="_blank" rel="noreferrer noopener">
        <Logo isFooter />
        <span className={styles.by}>
          <span>By</span>
          <div className={styles.inThePocket}>
            <InThePocket />
          </div>
        </span>
      </a>
      <div className={styles.footerLinks}>
        <dl className={styles.footerLinksList}>
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
        <dl className={styles.footerLinksList}>
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
    </footer>
  );
};

export default Footer;
