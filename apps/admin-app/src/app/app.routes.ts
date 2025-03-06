import { RouterConfig } from '@libs/types';
import { authRoutes } from '@libs/features/auth';

// Private routes
export const privateRoutes: RouterConfig[] = [] as const;

// Public routes
export const publicRoutes: RouterConfig[] = [...authRoutes] as const;
