import styled from 'styled-components';

export const StyledUsersPageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  min-height: 56px;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 100;
  position: -webkit-sticky;
  position: sticky;
  top: 64px;
`;

export const StyledUsersPageHeadInput = styled.div`
  max-width: 220px;
  width: 100%;
`;

export const StyledUsersSort = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
