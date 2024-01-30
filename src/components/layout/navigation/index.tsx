import NavigationRoutes from '@/constants/navigationRoutes';
import Link from 'next/link';
import {
  StyledLink,
  StyledNavigation,
} from '@/components/layout/navigation/StyledNavigation';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  return (
    <StyledNavigation>
      {NavigationRoutes.map((item) => (
        <Link key={item.displayName} href={item.url}>
          <StyledLink $isActive={router.asPath === item.url}>
            {item.displayName}
          </StyledLink>
        </Link>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
