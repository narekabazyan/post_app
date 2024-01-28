import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
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
      <Provider store={store}>
        <ThemeSwitcherProvider>
          {getLayout(<Component {...pageProps} />)}
        </ThemeSwitcherProvider>
      </Provider>
    </main>
  );
}
