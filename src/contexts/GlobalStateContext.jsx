import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalStateContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
};

const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);
  const [theme, setTheme] = useState(initialState.theme);

  useEffect(() => {
    const localUser = localStorage.getItem('userData');
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  const handleLoginUser = (name) => {
    setUser(name);
    localStorage.setItem('userData', name);
  };

  const handleLogoutUser = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark');
  };

  const contextValue = useMemo(
    () => ({
      user,
      handleLoginUser,
      handleLogoutUser,
      theme,
      handleToggleTheme,
    }),
    [user, theme],
  );

  return <GlobalStateContext.Provider value={contextValue}>{children}</GlobalStateContext.Provider>;
};

export default GlobalStateProvider;

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
