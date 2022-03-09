import React from 'react';
import './App.css';
import {Home} from './containers/Home/Home';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
