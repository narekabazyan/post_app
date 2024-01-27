import Navigation from '@/components/layout/Navigation';
import ThemeSwitcher from '@/components/common/ThemeSwithcer';
import styled from 'styled-components';

const StyledHeader = styled.header`
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

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
