import type { ReactNode } from 'react';

import Tagline from '@atoms/Tagline';

interface Props {
  children: ReactNode;
}

const FeatureTagline = ({ children }: Props) => {
  return (
    <Tagline type="h3" variant="feature">
      {children}
    </Tagline>
  );
};

export default FeatureTagline;
