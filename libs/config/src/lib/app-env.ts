export const appEnvironment = {
  mode: import.meta.env['VITE_ENV'],
  apiUrl: import.meta.env['VITE_API_URL'],
  appName: import.meta.env['VITE_APP_NAME'],
  oauth2: {
    google: import.meta.env['VITE_OAUTH2_GOOGLE_URL'],
    facebook: import.meta.env['VITE_OAUTH2_FACEBOOK_URL'],
    github: import.meta.env['VITE_OAUTH2_GITHUB_URL'],
  },
} as const;
