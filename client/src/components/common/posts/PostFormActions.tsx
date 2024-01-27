import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledPostFormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`;

const PostFormActions: FC<{ children: ReactElement }> = ({ children }) => {
  return <StyledPostFormActions>{children}</StyledPostFormActions>;
};

export default PostFormActions;
