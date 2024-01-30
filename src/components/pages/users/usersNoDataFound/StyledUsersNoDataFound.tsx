import styled from 'styled-components';

export const StyledUsersNoDataFound = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const StyledNoDataFoundText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.textGray};
`;
