import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string) => {
  const [storageValue, setStorageValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      if (item) {
        setStorageValue(item);
      }
    }
  }, []);

  return { storageValue };
};
