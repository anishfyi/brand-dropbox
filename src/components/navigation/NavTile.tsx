import React from 'react';
import Link from 'next/link';

interface NavTileProps {
  href: string;
  title: string;
  className?: string;
  showGridlines?: boolean;
}

const NavTile: React.FC<NavTileProps> = ({
  href,
  title,
  className = '',
  showGridlines = true,
}) => {
  return (
    <Link
      href={href}
      className={`nav-tile relative block w-[var(--button-size)] h-[var(--button-size)] bg-dropbox-light hover:bg-dropbox-blue transition-colors duration-300 ${className}`}
    >
      {showGridlines && (
        <>
          <div className="tile-line nav-l absolute left-0 top-0 w-[1px] h-full bg-accent-tab" />
          <div className="tile-line nav-r absolute right-0 top-0 w-[1px] h-full bg-accent-tab" />
          <div className="tile-line nav-t absolute left-0 top-0 h-[1px] w-full bg-accent-tab" />
          <div className="tile-line nav-b absolute left-0 bottom-0 h-[1px] w-full bg-accent-tab" />
        </>
      )}
      <div className="nav-button-title-container absolute inset-0 flex items-center justify-center">
        <span className="nav-header text-dropbox-dark hover:text-white transition-colors duration-300">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default NavTile; 