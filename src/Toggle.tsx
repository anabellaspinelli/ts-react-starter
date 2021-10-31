import { useContext } from 'react';
import { ThemeContext } from './contexts/theme-context';

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log({ setTheme });
  if (setTheme === undefined) return null;

  return theme === 'dark' ? (
    <button aria-label="set light mode" onClick={() => setTheme('light')}>
      <span aria-label="light mode icon" role="img">
        🌞
      </span>
    </button>
  ) : (
    <button aria-label="set dark mode" onClick={() => setTheme('dark')}>
      <span aria-label="dark mode icon" role="img">
        🌚
      </span>
    </button>
  );
};
