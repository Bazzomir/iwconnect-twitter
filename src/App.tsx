import React from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {useLocation} from 'react-router-dom';
import {Routes} from './state/Routes';
import {Footer} from './containers/Footer/Footer';

function App() {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className="row">
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
  );
}

export default App;
