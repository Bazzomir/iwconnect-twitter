import React from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {useLocation} from 'react-router-dom';
import {Routes} from './state/Routes';
import {Footer} from './containers/Footer/Footer';

function App() {
  return (
    <div className="container-fluid" style={{background:'red', height: '100vh'}}>
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
