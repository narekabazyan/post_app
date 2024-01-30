import React, { FC, useState } from 'react';
import { DateTime } from 'luxon';
import InputHolder from '@/components/common/inputHolder';
import { Button, Input, Textarea } from '@/components/ui';
import {
  StyledPostForm,
  StyledPostTitle,
  StyledPostFormActions,
} from '@/components/pages/posts/postCreateForm/StyledPostCreateForm';
import Post from '@/types/post';
import { useCreatePostMutation } from '@/services/post';

interface PostCreateFormProps {
  setFormVisible: (formVisible: boolean) => void;
}

const PostCreateForm: FC<PostCreateFormProps> = ({ setFormVisible }) => {
  const [createPost] = useCreatePostMutation();

  const [newPost, setNewPost] = useState<Post>({
    title: '',
    body: '',
    creationDate: '',
    image:
      'https://horizon-health.org/app/uploads/2023/04/blog-post-default@2x-600x400.png',
  });

  const handleChangePostData = (value: string, name: keyof Post) => {
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSaveNewPost = () => {
    newPost.creationDate = DateTime.now().toFormat('yyyy-MM-dd');

    createPost(newPost)
      .unwrap()
      .then(() => {
        setFormVisible(false);
      })
      .catch((e) => {
        console.log('Error: Request create post', e.message);
        console.log('Request body:', JSON.stringify(newPost));
      });
  };

  return (
    <StyledPostForm>
      <StyledPostTitle>post title</StyledPostTitle>
      <InputHolder isRequired title={'post title'}>
        <Input
          placeholder='post title'
          value={newPost.title}
          onChange={(e) => handleChangePostData(e.target.value, 'title')}
        />
      </InputHolder>
      <InputHolder isRequired title={'post body'}>
        <Textarea
          onChange={(e) => handleChangePostData(e.target.value, 'body')}
          value={newPost.body}
          placeholder='post body'
        />
      </InputHolder>
      <StyledPostFormActions>
        <Button onClick={() => setFormVisible(false)}>cancel</Button>
        <Button
          disabled={!newPost.title || !newPost.body}
          onClick={handleSaveNewPost}
        >
          save
        </Button>
      </StyledPostFormActions>
    </StyledPostForm>
  );
};

export default PostCreateForm;
