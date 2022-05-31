import React, {useContext, useState} from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {useLocation} from 'react-router-dom';
import {Routes} from './state/Routes';
import {Footer} from './containers/Footer/Footer';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/theme';
import {CustomThemeContext} from './context/CustomThemeContext';

function App() {
  const location = useLocation();

  const {theme: localTheme} = useContext(CustomThemeContext);

  return (
    <ThemeProvider theme={theme[localTheme]}>
      {/* <button onClick={toggleTheme}>switch theme</button> */}
      <div className="container-fluid">
        <div className="row">
          {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
          <Navbar />
          <Routes />
          {location.pathname !== '/messages' && location.pathname !== '/explore' && <Search />}
          {location.pathname == '/explore' && (
            <div className="col-3">
              <Footer />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
