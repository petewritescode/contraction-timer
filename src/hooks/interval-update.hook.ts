import { useEffect } from 'react';
import { useForceUpdate } from './force-update.hook';

export const useIntervalUpdate = (interval: number) => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (interval === undefined) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      forceUpdate();
    }, interval);

    return () => clearInterval(intervalId);
  });
};
