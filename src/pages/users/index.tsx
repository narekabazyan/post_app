import Head from 'next/head';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/pageLayout';
import UsersPage from '@/components/pages/users/usersPage';

const Users = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
        <meta name='description' content='All users' />
      </Head>
      <UsersPage />
    </>
  );
};

export default Users;

Users.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
