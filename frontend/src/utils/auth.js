// ============================================
// Auth Utils — Session-based (sessionStorage)
// ============================================
// Token clears when tab/browser closes
// User must login every time they open project
// ============================================

export const getUser = () => {
  const u = sessionStorage.getItem('user');
  if (!u) return null;
  try {
    return JSON.parse(u);
  } catch {
    return null;
  }
};

export const getToken = () => {
  return sessionStorage.getItem('token');
};

export const setAuth = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const clearAuth = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};

export const logout = () => {
  clearAuth();
  window.location.href = '/login';
};

export const isAuthenticated = () => {
  return !!getToken() && !!getUser();
};