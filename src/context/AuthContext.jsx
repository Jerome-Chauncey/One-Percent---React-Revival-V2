import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const defaultUser = {
  email: "testing@gmail.com",
  password: "testing123",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === defaultUser.email && password === defaultUser.password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
