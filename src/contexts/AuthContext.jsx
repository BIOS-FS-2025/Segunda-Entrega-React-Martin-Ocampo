import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Usuarios predefinidos para el login
const DEFAULT_USERS = [
  {
    id: 1,
    name: 'Martin',
    email: 'martin@gmail.com',
    password: 'admin123'
  }
];

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica si el usuario está logueado al iniciar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para validar credenciales del usuario
  const validateCredentials = (email, password) => {
    const foundUser = DEFAULT_USERS.find(user => 
      user.email === email && user.password === password
    );
    return foundUser;
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading,
    validateCredentials
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
