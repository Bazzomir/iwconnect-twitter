import React from 'react';
import {Navbar} from './components/Navbar';
import {Main} from './components/Main';
import {Search} from './components/Search';

export const Home = () => {
  return (
    <div className="row">
      <Navbar />
      <Main />
      <Search />
    </div>
  );
};
