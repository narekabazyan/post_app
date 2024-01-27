import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkModeTheme, lightModeTheme } from '@/styles/themes';

interface ThemeContextType {
  toggleTheme: (isDarkMode: boolean) => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeSwitcherProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((currentTheme) => !currentTheme);
  }, [setIsDarkMode]);

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? darkModeTheme.background
      : lightModeTheme.background;
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context: ThemeContextType | null = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeSwitcherProvider');
  }
  return context;
};
