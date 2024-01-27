import React from 'react';
import styled from 'styled-components';
import UsersPageHead from '@/components/pages/users/UsersPageHead';
import UserCard from '@/components/pages/users/UserCard';

const StyledUsersPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

const StyledUsersPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 24px;
`;

const StyledPaginationHolder = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  z-index: 100;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
`;

const UsersPage = () => {
  return (
    <StyledUsersPage>
      <UsersPageHead />
      <StyledUsersPageContent>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </StyledUsersPageContent>
      <StyledPaginationHolder>pagination</StyledPaginationHolder>
    </StyledUsersPage>
  );
};

export default UsersPage;
