import navigationRoutes from '@/constants/navigationRoutes';
import Link from 'next/link';
import {
  StyledLink,
  StyledNavigation,
} from '@/components/layout/navigation/StyledNavigation';

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
