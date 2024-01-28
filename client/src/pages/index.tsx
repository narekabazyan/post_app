import Head from 'next/head';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { HomePage } from '@/components/pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta name='description' content='All posts, create posts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
