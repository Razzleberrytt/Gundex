import { createContext, useContext } from 'react';

export interface CompareContextValue {
  compareIds: string[];
  toggleCompare: (id: string) => void;
  removeCompare: (id: string) => void;
  clearCompare: () => void;
  isCompared: (id: string) => boolean;
}

export const CompareContext = createContext<CompareContextValue | undefined>(undefined);

export const useCompareStore = () => {
  const context = useContext(CompareContext);
  if (!context) throw new Error('useCompareStore must be used within CompareProvider');
  return context;
};
