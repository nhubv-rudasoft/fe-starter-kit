import React from 'react';
import { FooterProps } from './footer.type';

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className='w-full pb-4 text-center'>
      <p className='text-xs font-light text-gray-500'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
