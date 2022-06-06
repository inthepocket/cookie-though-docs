import { useEffect, useState } from 'react';

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), [setIsMounted]);

  return isMounted;
};

export default useIsMounted;
