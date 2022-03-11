import React from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import {Routes} from './state/Routes';

function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Routes />
          <Search />
        </div>
      </div>
  );
}

export default App;
