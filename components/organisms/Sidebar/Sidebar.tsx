import Link from 'next/link';

import styles from './Sidebar.module.css';

import InThePocket from '@icons/itp-logo.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <dl className={styles.sidebarList}>
          <dt>Overview</dt>
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
          </div>
        </dl>
        <dl className={styles.sidebarList}>
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
      <a href="https://www.inthepocket.com" target="_blank" rel="noreferrer noopener">
        <span className={styles.by}>
          <span>By</span>
          <div className={styles.inThePocket}>
            <InThePocket />
          </div>
        </span>
      </a>
    </aside>
  );
};

export default Sidebar;
