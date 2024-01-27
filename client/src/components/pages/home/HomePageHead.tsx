import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/ui';

const StyledHomePageHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const HomePageHead = () => {
  return (
    <StyledHomePageHead>
      <Button>Create Post</Button>
    </StyledHomePageHead>
  );
};

export default HomePageHead;
