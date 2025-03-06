import React from 'react';
import { FooterProps } from './footer.type';

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={theme}>
      <div className='flex flex-col h-full'>
        <div className='flex-1'>
          <h1>Footer</h1>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
