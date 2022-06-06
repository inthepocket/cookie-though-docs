import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

import styles from './Docs.module.css';

import useIsMounted from '@hooks/useIsMounted';
import components from '@mdx';
import Navigation from '@organisms/Navigation';

interface Props {
  frontmatter: {
    title: string;
    description: string;
  };
  children: ReactNode;
}

const Docs = ({ frontmatter, children }: Props) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.docs}>
      <Navigation isDocs />
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
  );
};

export default Docs;
