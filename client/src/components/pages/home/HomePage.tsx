import React, { FC, ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { HomePageContent, HomePageHead } from '@/components/pages/home/index';
import PostForm from '../../common/posts/PostForm';
import { useGetPostsQuery } from '@/services/post';

const StyledHomePage = styled.div`
  padding: 24px;
  max-width: 1024px;
  margin: 0 auto;
`;

const HomePage = () => {
  const { data: posts } = useGetPostsQuery();

  useEffect(() => {
    console.log('posts,', posts);
  }, [posts]);

  return (
    <StyledHomePage>
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
    </StyledHomePage>
  );
};

export default HomePage;
