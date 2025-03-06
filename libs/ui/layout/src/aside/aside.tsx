import React from 'react';
import { AsideProps } from './aside.type';

const Aside: React.FC<AsideProps> = ({ theme }) => {
  return (
    <aside className={`bg-${theme}-200 w-64`}>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

Aside.displayName = 'Aside';
export default Aside;
