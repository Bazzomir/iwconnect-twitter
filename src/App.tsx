import React from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {useLocation} from 'react-router-dom';
import {Routes} from './state/Routes';

function App() {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container" style={{background: 'black'}}>
          <div className="row">
            <Navbar />
            <Routes />
            {location.pathname !== '/messages' && location.pathname !== '/explore' && <Search />}
            {/* location.pathname !== '/messages' && location.pathname !== '/explore' && <Footer/>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
