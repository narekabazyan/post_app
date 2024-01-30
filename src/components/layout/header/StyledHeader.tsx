import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 64px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 0 16px;
  z-index: 100;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;
