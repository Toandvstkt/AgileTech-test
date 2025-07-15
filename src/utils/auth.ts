export const saveTokenToStorage = (accessToken: string, expiresAt: number) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('expiresAt', expiresAt.toString());
};

export const getTokenFromStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const expiresAt = localStorage.getItem('expiresAt');
  return { accessToken, expiresAt: expiresAt ? parseInt(expiresAt) : 0 };
};

export const isTokenExpired = () => {
  const { expiresAt } = getTokenFromStorage();
  return Date.now() > expiresAt;
};

export const clearAuthStorage = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expiresAt');
};

export const getRemainingTime = () => {
  const { expiresAt } = getTokenFromStorage();
  return expiresAt - Date.now();
};
