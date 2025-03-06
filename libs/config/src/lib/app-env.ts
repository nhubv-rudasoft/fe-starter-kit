export const appEnvironment = {
  mode: import.meta.env['VITE_ENV'],
  apiUrl: import.meta.env['VITE_API_URL'],
  appName: import.meta.env['VITE_APP_NAME'],
} as const;
