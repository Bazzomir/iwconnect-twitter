import React, {useContext} from 'react';
import './App.css';
import {Routes} from './state/Routes';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/theme';
import {CustomThemeContext} from './context/CustomThemeContext';

function App() {
  const {theme: localTheme} = useContext(CustomThemeContext);

  return (
    <ThemeProvider theme={theme[localTheme]}>
      <div className="container-fluid">
        <div className="row">
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
