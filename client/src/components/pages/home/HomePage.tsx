import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  padding: 24px;
  max-width: 1024px;
  margin: 0 auto;
`;

const HomePage: FC<{ children: ReactElement }> = ({ children }) => {
  return <StyledHomePage>{children}</StyledHomePage>;
};

export default HomePage;
