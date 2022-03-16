import React from 'react';
import './App.css';
import {Home} from './containers/Home/Home';

function App() {
  return (
    <div className="container-fluid" style={{background:'red', height: '100vh'}}>
      <div className="row">
        <div className="container" style={{ height: '100vh'}}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
