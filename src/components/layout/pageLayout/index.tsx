import Head from 'next/head';
import { FC, ReactElement } from 'react';
import Header from '@/components/layout/header';

const PageLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section>{children}</section>
    </>
  );
};

export default PageLayout;
