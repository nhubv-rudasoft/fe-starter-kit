import { RouterConfig } from '@libs/types';
import { authRoutes } from '@libs/features/auth';
import { userRoutes } from '@libs/features/user';
// Private routes
export const privateRoutes: RouterConfig[] = [...userRoutes] as const;

// Public routes
export const publicRoutes: RouterConfig[] = [...authRoutes] as const;
