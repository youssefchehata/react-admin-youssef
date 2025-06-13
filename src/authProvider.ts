import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  // Runs when user attempts to login
  login: ({ username, password }) => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('username', username);
      return Promise.resolve();
    }
    return Promise.reject();
  },

  // Runs when user clicks logout button
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },

  // Runs when API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Runs when user navigates to a new location
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },

  // Runs to get user permissions
  getPermissions: () => Promise.resolve(),
};