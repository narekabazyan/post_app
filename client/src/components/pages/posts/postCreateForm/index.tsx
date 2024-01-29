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
      'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg',
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
      .catch((e) => console.log('e', e));
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
