import { useRef } from 'react';

import Feature from './Feature';
import styles from './Features.module.css';

import useIsMounted from '@hooks/useIsMounted';
import Accessibility from '@icons/accessibility.svg';
import Compliant from '@icons/compliant.svg';
import Lightweight from '@icons/lightweight.svg';
import bannerCollapsed from '@public/images/example-collapsed.png';
import bannerExpanded from '@public/images/example-expanded.png';

const Features = () => {
  useIsMounted();
  const featureListRef = useRef<HTMLUListElement>(null);

  return (
    <section>
      <h2 id="features" className="sr-only">
        Features
      </h2>
      <ul ref={featureListRef} className={styles.features}>
        <div className={styles.content}>
          <Feature>
            <Feature.Content>
              <Feature.Icon icon={<Lightweight />} />
              <Feature.Tagline>Lightweight</Feature.Tagline>
              <p>
                Thanks to the use of Preact, Cookie Though is only 10Kb, which means users
                won&apos;t get a pop-up after they&apos;ve already started interacting with the
                site.
              </p>
            </Feature.Content>
            <Feature.Background src={bannerCollapsed} />
          </Feature>
          <Feature>
            <Feature.Content>
              <Feature.Icon icon={<Compliant />} />
              <Feature.Tagline>GDPR Compliant</Feature.Tagline>
              <p>
                With Cookie Though, you can easily request permission for the optional cookies. Your
                users won&apos;t have to worry about fuzzy descriptions.
              </p>
            </Feature.Content>
            <Feature.Background src={bannerExpanded} />
          </Feature>
          <Feature>
            <Feature.Content>
              <Feature.Icon icon={<Accessibility />} />
              <Feature.Tagline>Accessible</Feature.Tagline>
              <p>
                Cookie though is build with accessibility in mind, it follows WAI-ARIA best
                practices and has been tested with real screen readers.
              </p>
            </Feature.Content>
            <Feature.Background src={bannerExpanded} />
          </Feature>
        </div>
      </ul>
    </section>
  );
};

export default Features;
