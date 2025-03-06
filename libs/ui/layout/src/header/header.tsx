import React from 'react';
import { HeaderProps } from './header.type';

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <header className={`bg-${theme}-500`}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
