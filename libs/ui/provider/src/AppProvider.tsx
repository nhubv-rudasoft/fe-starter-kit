import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appStore } from '@libs/data-access/state';
import ToastProvider from './ToastProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={appStore}>
      <ToastProvider />
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
