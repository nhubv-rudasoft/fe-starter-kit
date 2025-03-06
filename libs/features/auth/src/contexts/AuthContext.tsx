import { createContext } from 'react';
import { LoginRequest } from '../auth.type';

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  loginUser: (payload: LoginRequest) => void;
  logoutUser: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
