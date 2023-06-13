import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../locales/en.json';
import pt from '../locales/pt-BR.json';
import { DEFAULT_LANG } from '@/constants/globalVars';

type ILocaleProviderProps = {
  children: ReactNode;
}

export default function LocaleProvider({ children }: ILocaleProviderProps) {
  const [locale, setLocale] = useState<string>(DEFAULT_LANG);

  useEffect(() => {
    console.log(navigator.language)
    setLocale(navigator.language);
  }, []);

  return (
    <IntlProvider locale={locale} messages={locale === DEFAULT_LANG ? pt : en}>
      {children}
    </IntlProvider>
  );
}