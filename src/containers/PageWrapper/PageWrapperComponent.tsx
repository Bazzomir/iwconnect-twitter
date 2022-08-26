import React from 'react';
import {Navbar} from '../Navbar/Navbar';
import {Footer} from '../Footer/Footer';
import {Search} from '../Search/Search';
import {useLocation} from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PageWrapperComponent = ({children}: Props) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <>{children}</>
      <>
        {location.pathname !== '/messages' && location.pathname !== '/explore' && <Search />}
        {location.pathname == '/explore' && (
          <div className="col-3">
            <Footer />
          </div>
        )}
      </>
    </>
  );
};
