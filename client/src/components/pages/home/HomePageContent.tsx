import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledHomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HomePageContent: FC<{ children: ReactElement }> = ({ children }) => {
  return <StyledHomePageContent>{children}</StyledHomePageContent>;
};

export default HomePageContent;
