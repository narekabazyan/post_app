import React, { lazy, Suspense, useState } from 'react';
import { useGetPostsQuery } from '@/services/post';
import { Button } from '@/components/ui';
import {
  StyledPostsPage,
  StyledPostsPageHead,
  StyledPostsPageContent,
} from '@/components/pages/posts/postsPage/StyledPostsPage';
import PostCard from '@/components/pages/posts/postCard';

const PostCreateForm = lazy(
  () => import('@/components/pages/posts/postCreateForm')
);

const PostsPage = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const { data: posts } = useGetPostsQuery();

  return (
    <StyledPostsPage>
      {formVisible ? null : (
        <StyledPostsPageHead>
          <Button onClick={() => setFormVisible(true)}>Create Post</Button>
        </StyledPostsPageHead>
      )}
      <StyledPostsPageContent>
        {formVisible ? (
          <Suspense fallback={<div>Loading...</div>}>
            <PostCreateForm setFormVisible={setFormVisible} />
          </Suspense>
        ) : null}
        {Array.isArray(posts)
          ? posts.map((post) => (
              <PostCard key={post.id || post.title} post={post} />
            ))
          : null}
      </StyledPostsPageContent>
    </StyledPostsPage>
  );
};

export default PostsPage;
