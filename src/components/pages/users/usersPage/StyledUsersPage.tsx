import styled from 'styled-components';

export const StyledUsersPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

export const StyledUsersPageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 24px;
`;
