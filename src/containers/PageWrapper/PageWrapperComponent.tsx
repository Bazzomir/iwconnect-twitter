import React from 'react';
import {Navbar} from '../Navbar/Navbar';
// import {Routes} from '../../state/Routes';
import {Footer} from '../Footer/Footer';
import {Search} from '../Search/Search';
import {useLocation} from 'react-router-dom';
// import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PageWrapperComponent = ({children}: Props) => {
  const location = useLocation();

  return (
    <>
      {/* <ErrorBoundry> */}
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
      {/* </ErrorBoundry> */}
    </>
  );
};
