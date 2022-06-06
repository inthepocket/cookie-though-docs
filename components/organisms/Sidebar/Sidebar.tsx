import Link from 'next/link';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
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
    </aside>
  );
};

export default Sidebar;
