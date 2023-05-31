import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    localStorage.theme = 'dark';
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  console.log(darkMode);
  if (darkMode) {
    document.documentElement.dataset.theme = 'dark';
    localStorage.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
