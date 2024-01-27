import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { InputHolder, PostFormActions } from '@/components/common';
import { Button, Input, Textarea } from '@/components/ui';

const StyledPostForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const StyledPostTitle = styled.h6`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: capitalize;
`;

const PostForm: FC = () => {
  return (
    <StyledPostForm>
      <StyledPostTitle>post title</StyledPostTitle>
      <InputHolder isRequired title={'post title'}>
        <Input placeholder='post title' />
      </InputHolder>
      <InputHolder isRequired title={'post body'}>
        <Textarea placeholder='post body' />
      </InputHolder>
      <PostFormActions>
        <Button>save</Button>
      </PostFormActions>
    </StyledPostForm>
  );
};

export default PostForm;
