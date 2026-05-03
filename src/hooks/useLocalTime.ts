import { useState, useEffect } from 'react';
import { getLocalTime } from '../utils/time';

export const useLocalTime = (timezone: string) => {
  const [time, setTime] = useState(() => getLocalTime(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getLocalTime(timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return time;
};