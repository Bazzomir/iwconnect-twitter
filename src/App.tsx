import React, {useContext} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {useLocation} from 'react-router-dom';
import {Routes} from './state/Routes';
import {Footer} from './containers/Footer/Footer';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/theme';
import {CustomThemeContext} from './context/CustomThemeContext';
import { store } from './state/store';

function App() {
  const location = useLocation();

  const {theme: localTheme} = useContext(CustomThemeContext);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme[localTheme]}>
        <div className="container-fluid">
          <div className="row">
            {/* <div className="row">
          <Navbar />
          <Routes />
          {location.pathname !== '/messages' && location.pathname !== '/explore' && <Search />}
          {location.pathname == '/explore' && (
            <div className="col-3">
            <Footer />
            </div>
            )}
        </div> */}
            <Routes />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
