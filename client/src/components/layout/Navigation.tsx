import Link from 'next/link';
import navigationRoutes from '@/constants/navigationRoutes';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledLink = styled.p<{ $isActive: boolean }>`
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

const Navigation = () => {
  return (
    <StyledNavigation>
      {navigationRoutes.map((item) => (
        <Link key={item.displayName} href={item.url}>
          <StyledLink $isActive={!!item.displayName}>
            {item.displayName}
          </StyledLink>
        </Link>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
