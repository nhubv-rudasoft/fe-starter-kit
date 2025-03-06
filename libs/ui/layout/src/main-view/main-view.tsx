import { Outlet } from 'react-router';
import { Footer } from '../footer';
import { Header } from '../header';
import { Aside } from '../aside';
import { MainViewProps } from './main-view.type';

const MainView = ({ theme }: MainViewProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header theme={theme} />
      <Aside theme={theme} />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default MainView;
