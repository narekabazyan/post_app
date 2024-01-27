import { ReactElement, ReactNode, useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ThemeSwitcherProvider } from '@/context/ThemeContext';
import GlobalStyles from '@/styles/globalStyles';
import initUsersData from '@/utils/usersDataInit';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(initUsersData, []);

  return (
    <main>
      <GlobalStyles />
      <ThemeSwitcherProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeSwitcherProvider>
    </main>
  );
}
