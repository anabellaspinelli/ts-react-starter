import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem('color-theme');

    if (
      typeof storedTheme === 'string' &&
      (storedTheme === 'dark' || storedTheme === 'light')
    ) {
      return storedTheme;
    }

    const userMedia = window.matchMedia('prefers-color-scheme: dark');

    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

type ThemeContextValue = {
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
});

export const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme?: Theme;
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const setNodeTheme = (theme: Theme) => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    setNodeTheme(initialTheme);
  }

  useEffect(() => {
    setNodeTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
