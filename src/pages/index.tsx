import Head from 'next/head';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/pageLayout';
import PostsPage from '@/components/pages/posts/postsPage';

const Home = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta name='description' content='All posts, create posts' />
      </Head>
      <PostsPage />
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
