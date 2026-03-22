import { useState } from 'react';
import { CompareContext } from './compareContext';

const STORAGE_KEY = 'gundex-compare';
const COMPARE_QUICK_KEY = 'compareList';

export const CompareProvider = ({ children }: { children: React.ReactNode }) => {
  const [compareIds, setCompareIds] = useState<string[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  });

  const persist = (next: string[]) => {
    setCompareIds(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    localStorage.setItem(COMPARE_QUICK_KEY, JSON.stringify(next));
  };

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) return persist(compareIds.filter((item) => item !== id));
    if (compareIds.length >= 4) return;
    return persist([...compareIds, id]);
  };

  const removeCompare = (id: string) => persist(compareIds.filter((item) => item !== id));
  const clearCompare = () => persist([]);

  return (
    <CompareContext.Provider
      value={{ compareIds, toggleCompare, removeCompare, clearCompare, isCompared: (id: string) => compareIds.includes(id) }}
    >
      {children}
    </CompareContext.Provider>
  );
};
