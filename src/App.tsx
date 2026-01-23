import React, { useContext } from 'react';
import './App.css';
import { Routes } from './state/Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { CustomThemeContext } from './context/CustomThemeContext';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import {themeSelector} from './state/theme/theme.selectors';

function App() {
  const { theme: localTheme } = useContext(CustomThemeContext);

  // const localTheme = useSelector(themeSelector);

  return (
    <ThemeProvider theme={theme[localTheme]}>
      <div className="container d-flex justify-content-center">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
