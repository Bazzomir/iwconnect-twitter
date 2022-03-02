import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Search from './components/Search';

const Home = () => {
  return (
    <div className="row">
      <Navbar />
      <Main />
      <Search />
    </div>
  );
};

export default Home;
