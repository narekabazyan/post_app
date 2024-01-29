import Navigation from '@/components/layout/navigation';
import ThemeSwitcher from '@/components/common/themeSwitcher';
import { StyledHeader } from '@/components/layout/header/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
