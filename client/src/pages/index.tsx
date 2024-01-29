import Head from 'next/head';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/pageLayout';
import Index from '@/components/pages/posts/postsPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta name='description' content='All posts, create posts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Index />
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
