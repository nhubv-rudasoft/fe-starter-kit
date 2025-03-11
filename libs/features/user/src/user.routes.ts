import { RouterConfig } from '@libs/types';
import { default as UserProfilePage } from './pages/UserProfilePage';

export const userRoutes: RouterConfig[] = [
  {
    path: 'profile',
    element: UserProfilePage,
    title: 'User Profile',
    isLazy: false,
  },
];
