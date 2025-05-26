import React from 'react';
import NavMenu from '../navigation/NavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavMenu />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout; 