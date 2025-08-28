import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Usuario fijo por defecto
const DEFAULT_USER = {
  id: 1,
  name: 'Martin',
  email: 'martin@gmail.com',
  password: 'admin123'
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let saved = localStorage.getItem('user');
    if (!saved) {
      localStorage.setItem('user', JSON.stringify(DEFAULT_USER));
      saved = JSON.stringify(DEFAULT_USER);
    }
    setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  const login = () => {
    setUser(DEFAULT_USER);
    localStorage.setItem('user', JSON.stringify(DEFAULT_USER));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
