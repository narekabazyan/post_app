import React, { useState } from 'react';
import { useGetPostsQuery } from '@/services/post';
import { Button } from '@/components/ui';
import {
  StyledPostsPage,
  StyledPostsPageHead,
  StyledPostsPageContent,
} from '@/components/pages/posts/postsPage/StyledPostsPage';
import PostCard from '@/components/pages/posts/postCard';
import PostCreateForm from '@/components/pages/posts/postCreateForm';
import Loader from '@/components/common/loader';

const PostsPage = () => {
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const { data: posts, isFetching } = useGetPostsQuery();

  return (
    <StyledPostsPage>
      {formVisible ? null : (
        <StyledPostsPageHead>
          <Button onClick={() => setFormVisible(true)}>Create Post</Button>
        </StyledPostsPageHead>
      )}
      <StyledPostsPageContent>
        {formVisible ? (
          <PostCreateForm setFormVisible={setFormVisible} />
        ) : null}
        {isFetching ? <Loader /> : null}
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
