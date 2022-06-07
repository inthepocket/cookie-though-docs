import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import Head from 'next/head';
import type { ReactNode } from 'react';

import styles from './Docs.module.css';

import components from '@mdx';
import Navigation from '@organisms/Navigation';
import Sidebar from '@organisms/Sidebar';

interface Props {
  frontmatter: {
    title: string;
    description: string;
  };
  children: ReactNode;
}

const Docs = ({ frontmatter, children }: Props) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Cookie Though</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.docs}>
        <Navigation isDocs />
        <div className={styles.content}>
          <Sidebar />
          <main>
            <article>
              <header className={styles.header}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.description}</p>
              </header>

              <MDXProvider components={components as MDXComponents}>{children}</MDXProvider>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default Docs;
