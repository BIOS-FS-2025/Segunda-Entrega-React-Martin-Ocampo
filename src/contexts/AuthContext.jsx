import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const defaultUser = {
  name: "Martin",
  email: "martin@gmail.com",
  password: "admin123",
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = () => setUser(defaultUser);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, defaultUser }}>
      {children}
    </AuthContext.Provider>
  );
};




