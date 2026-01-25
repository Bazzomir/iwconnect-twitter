import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Search } from '../Search/Search';
import { useLocation } from 'react-router-dom';
import { MobileMenuButton } from '../../components/Button/Button';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PageWrapperComponent = ({ children }: Props) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };


  return (
    <>
      <MobileMenuButton isOpen={isNavOpen} onClick={() => setIsNavOpen(prev => !prev)} />
      <Navbar className={isNavOpen ? 'open' : ''} onLinkClick={handleLinkClick} />
      <>{children}</>
      <>
        {location.pathname !== '/messages' && location.pathname !== '/explore' && <Search />}
        {location.pathname === '/explore' && (
          <div className="col-3">
            <Footer />
          </div>
        )}
      </>
    </>
  );
};
