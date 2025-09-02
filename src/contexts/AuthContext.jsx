import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const DEFAULT_USER = {
  name: 'Martin',
  email: 'martin@gmail.com',
  password: 'admin123'
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => setUser(DEFAULT_USER);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, DEFAULT_USER }}>
      {children}
    </AuthContext.Provider>
  );
};
