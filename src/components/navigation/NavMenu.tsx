import React from 'react';
import Logo from './Logo';
import NavTile from './NavTile';

const NavMenu: React.FC = () => {
  return (
    <nav className="nav-container fixed top-0 left-0 w-full h-full pointer-events-none">
      <div className="nav-wrapper-gridlines absolute inset-0">
        <div className="nav-tile-gridlines absolute top-0 left-0 w-full h-full">
          {/* Grid lines will be added here */}
        </div>
      </div>
      
      <div className="nav-wrapper absolute top-0 left-0 w-full h-full">
        <div className="nav-tile-container absolute top-0 left-0 w-full h-full">
          <div className="nav-tile-grid absolute top-0 left-0 w-full h-full grid grid-cols-3 gap-[var(--nav-tile-gap)] p-[var(--nav-tile-gap)]">
            <NavTile href="/brand-guidelines" title="Brand Guidelines" />
            <NavTile href="/design-system" title="Design System" />
            <NavTile href="/resources" title="Resources" />
          </div>
        </div>
      </div>

      <div className="home-logo-container absolute bottom-[44.5px] left-[45px] w-[91px] h-[91px] pointer-events-auto">
        <Logo />
      </div>
    </nav>
  );
};

export default NavMenu; 