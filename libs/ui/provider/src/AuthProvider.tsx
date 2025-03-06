import { ReactNode, useState } from 'react';
import { getJwtToken, signIn } from '@libs/features/auth';
import { useNavigate } from 'react-router-dom';
import { AppConstants } from '@libs/config';
import { AuthContext } from '@libs/features/auth';
import { LoginRequest } from '../../../features/auth/src/auth.type';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getJwtToken());
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (payload: LoginRequest) => {
    setIsLoading(true);
    const response = await signIn(payload);
    if (response.responseCode === '200') {
      localStorage.setItem(AppConstants.LOCALSTORAGE.JWT_TOKEN, response.body.accessToken);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };

  const setAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AppConstants.LOCALSTORAGE.JWT_TOKEN);
  };

  return (
    <AuthContext.Provider
      value={{ setAuthenticated, isAuthenticated, loginUser, logoutUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
