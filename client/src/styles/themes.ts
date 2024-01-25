interface CommonColors {
  primary: string;
  textGray: string;
  error: string;
}

interface ThemeColors extends CommonColors {
  background: string;
  border: string;
  backgroundGray: string;
  buttonHover: string;
  text: string;
}

interface Theme {
  colors: ThemeColors;
  boxShadow: string;
}

const commonColors: CommonColors = {
  primary: '#8057F8',
  textGray: '#8087a1',
  error: '#FF0000',
};

export const darkModeTheme: Theme = {
  colors: {
    ...commonColors,
    background: '#ffffff',
    border: '#eeeff2',
    backgroundGray: '#eeeff2',
    buttonHover: '#f7f8fa',
    text: '#111111',
  },
  boxShadow: '6px 6px 24px -2px rgba(0, 0, 0, 0.05)',
};

export const lightModeTheme: Theme = {
  colors: {
    ...commonColors,
    background: '#2B2B2B',
    border: '#5d5d5f',
    backgroundGray: '#eeeff2',
    buttonHover: '#232323',
    text: '#ffffff',
  },
  boxShadow: '6px 6px 24px -2px rgba(255, 255, 255, 0.05)',
};
