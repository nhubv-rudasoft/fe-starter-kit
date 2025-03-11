import { Outlet } from 'react-router';
import { Header } from '../header';
import { Aside } from '../aside';
import { Footer } from '../footer';
import { MainViewProps } from './main-view.type';

const MainView = ({ theme }: MainViewProps) => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Aside />
      <div className='ml-0 flex flex-1 flex-col pt-4'>
        <Header />

        <main className='relative flex-1 overflow-y-auto px-8 lg:px-48'>
          <div className='mx-auto h-full max-w-screen-2xl space-y-4 py-5'>
            <div className='min-h-[calc(100vh-186px)] rounded-sm bg-transparent'>
              <Outlet />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainView;
