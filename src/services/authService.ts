// import { api } from './api';

// export const login = async (username: string) => {
//   const res = await api.post('/auth/login', { username }); // không cần password
//   const { accessToken } = res.data;
//   localStorage.setItem('accessToken', accessToken);
//   return res.data;
// };

// export const logout = async () => {
//   await api.post('/auth/logout');
//   localStorage.removeItem('accessToken');
// };
// services/auth.ts

export const mockLogin = async (username: string): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}> => {
  const allowedUsers = [
    'admin', 'admin1', 'admin2',
    'adminRefresh', 'adminRefresh1', 'adminRefresh2',
    'adminRefresh3', 'adminRefresh4', 'adminRefresh5',
    'adminRefresh6', 'adminRefresh7', 'adminRefresh8',
    'adminRefresh9', 'adminRefresh10',
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (allowedUsers.includes(username)) {
        const expiresAt = Date.now() + 2 * 60 * 1000; 
        resolve({
          accessToken: 'mock-access-token',
          refreshToken: 'mock-refresh-token',
          expiresAt,
        });
      } else {
        reject(new Error('Invalid username'));
      }
    }, 1000);
  });
};

export const mockRefreshToken = () => {
  return {
    accessToken: 'new-mock-access-token',
    expiresAt: Date.now() + 2 * 60 * 1000,
  };
};