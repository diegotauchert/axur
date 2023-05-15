import React, { ReactNode, useState, useCallback } from 'react';
import { CrawlContext } from '../contexts/CrawlContext';
import { CrawlInterface } from '@/interfaces/CrawlInterface';

type IAppProviderProps = {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  const [ids, setIds] = useState<CrawlInterface[]>([] as CrawlInterface[]);

  const crawlIdsSaved = useCallback((data: CrawlInterface) => {
    setIds(current => [...current, data]);
  }, [])

  return (
    <CrawlContext.Provider value={{ ids, crawlIdsSaved }}>
      {children}
    </CrawlContext.Provider>
  );
}