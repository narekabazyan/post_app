import styled from 'styled-components';

export const StyledPaginationHolder = styled.div`
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
