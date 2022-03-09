import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';
import { Main } from './components/Main/Main';

export const Home = () => {
  return (
    <div className="row">
      <Navbar />
      <Main />
      <Search />
    </div>
  );
};
