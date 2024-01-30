import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { ReactElement } from 'react';
import { User } from '@/types/user';
import { BaseURL } from '@/constants/config';
import PageLayout from '@/components/layout/pageLayout';
import { Network } from '@/constants/network';
import UserDetailsPage from '@/components/pages/userDetails/userDetailsPage';

interface UserDetailsProps {
  data: User;
}

const UserDetails = (props: UserDetailsProps) => {
  return (
    <>
      <Head>
        <title>User Details Page</title>
        <meta name='description' content='User details page' />
      </Head>
      <UserDetailsPage user={props.data} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = +(context.query.userId as string);
  if (Number.isNaN(id)) return { notFound: true };

  const axiosInstance = axios.create({ baseURL: BaseURL });

  try {
    const response = await axiosInstance.get(`${Network.Users}/${id}`);
    const data = response?.data;

    return data ? { props: { data } } : { notFound: true };
  } catch (e) {
    console.log('Error', e);
    return { notFound: true };
  }
}

export default UserDetails;

UserDetails.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
