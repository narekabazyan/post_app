interface CommonVars {
  primary: string;
  textGray: string;
  error: string;
}

interface ThemeVars extends CommonVars {
  background: string;
  border: string;
  backgroundGray: string;
  buttonHover: string;
  text: string;
  boxShadow: string;
}

const commonVars: CommonVars = {
  primary: '#8057F8',
  textGray: '#8087a1',
  error: '#FF0000',
};

export const lightModeTheme: ThemeVars = {
  ...commonVars,
  background: '#ffffff',
  border: '#eeeff2',
  backgroundGray: '#eeeff2',
  buttonHover: '#f7f8fa',
  text: '#111111',
  boxShadow: '6px 6px 24px -2px rgba(0, 0, 0, 0.05)',
};

export const darkModeTheme: ThemeVars = {
  ...commonVars,
  background: '#2B2B2B',
  border: '#5d5d5f',
  backgroundGray: '#eeeff2',
  buttonHover: '#232323',
  text: '#ffffff',
  boxShadow: '6px 6px 24px -2px rgba(255, 255, 255, 0.05)',
};
