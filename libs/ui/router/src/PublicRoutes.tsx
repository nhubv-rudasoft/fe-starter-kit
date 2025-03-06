import { Routes, Route, Navigate } from 'react-router-dom';
import { RouterConfig } from '@libs/types';
import { AppConstants } from '@libs/config';

const isAuthenticated = () => !!localStorage.getItem(AppConstants.LOCALSTORAGE.JWT_TOKEN);

interface PublicRoutesProps {
  publicRoutes: RouterConfig[];
}

export default function PublicRoutes({ publicRoutes }: PublicRoutesProps) {
  return isAuthenticated() ? (
    <Navigate to='/' replace />
  ) : (
    <Routes>
      {publicRoutes.map((route: RouterConfig) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}
