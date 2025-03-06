import { RouterConfig } from '@libs/types';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Oauth2RedirectPage from './pages/Oauth2RedirectPage';

const authRoutes: RouterConfig[] = [
  {
    path: 'login',
    element: LoginPage,
    title: 'Login',
    isLazy: false,
  },
  {
    path: 'register',
    element: RegisterPage,
    title: 'Register',
    isLazy: false,
  },
  {
    path: 'oauth2/redirect',
    element: Oauth2RedirectPage,
    title: 'OAuth2 Redirect',
    isLazy: false,
  },
];

export default authRoutes;
