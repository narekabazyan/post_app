import '@/styles/index.scss';
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeSwitcherProvider } from '@/context/ThemeContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={roboto.className}>
      <ThemeSwitcherProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeSwitcherProvider>
    </main>
  );
}
