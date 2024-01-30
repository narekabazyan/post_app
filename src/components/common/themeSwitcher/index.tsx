import { useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const switchTheme = useCallback(
    () => toggleTheme(!isDarkMode),
    [toggleTheme, isDarkMode]
  );

  return (
    <Button onClick={switchTheme}>
      {isDarkMode ? 'light mode' : 'dark mode'}
    </Button>
  );
};

export default ThemeSwitcher;
