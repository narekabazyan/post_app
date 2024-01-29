import Head from 'next/head';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/pageLayout';
import UsersPage from '@/components/pages/users/usersPage/UsersPage';

export default function Users() {
  return (
    <>
      <Head>
        <title>Users Page</title>
        <meta name='description' content='All users' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UsersPage />
    </>
  );
}

Users.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
