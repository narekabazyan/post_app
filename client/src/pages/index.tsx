import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import {
  HomePage,
  HomePageHead,
  HomePageContent,
} from '@/components/pages/home';
import PostForm from '@/components/common/posts/PostForm';
import AvatarImg from '@/styles/img.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta name='description' content='All posts, create posts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage>
        <>
          <HomePageHead />
          <HomePageContent>
            <>
              <PostForm />
              <div className='postCard'>
                <div className='postCardImgHolder'>
                  {/*<Image*/}
                  {/*  src={AvatarImg}*/}
                  {/*  alt='Avatar'*/}
                  {/*  className='postCardImg'*/}
                  {/*  fill*/}
                  {/*/>*/}
                </div>
                <div className='postCardInner'>
                  <div className='postCardHead'>
                    <h6 className='homePageFormCardTitle'>
                      Lorem ipsum dolor sit amet.
                    </h6>
                    <p className='homePageCardText'>5 jun | 27 july</p>
                  </div>
                  <p className='homePageCardDescription'>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </>
          </HomePageContent>
        </>
      </HomePage>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>;
};
