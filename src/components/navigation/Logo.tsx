import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`home-logo-container ${className}`}>
      <svg
        className="home-logo"
        width="100%"
        height="100%"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.5 0C20.4 0 0 20.4 0 45.5S20.4 91 45.5 91 91 70.6 91 45.5 70.6 0 45.5 0zm0 81.9c-20.1 0-36.4-16.3-36.4-36.4S25.4 9.1 45.5 9.1 81.9 25.4 81.9 45.5 65.6 81.9 45.5 81.9z"
          fill="currentColor"
          fillOpacity="0"
          stroke="var(--accent--tab)"
          strokeWidth="1"
          style={{
            vectorEffect: 'non-scaling-stroke',
            strokeDasharray: '1000 1000',
            strokeDashoffset: '1000',
          }}
        />
      </svg>
    </div>
  );
};

export default Logo; 