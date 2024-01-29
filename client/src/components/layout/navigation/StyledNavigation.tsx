import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledLink = styled.p<{ $isActive: boolean }>`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.text)};
  transition: 240ms;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
