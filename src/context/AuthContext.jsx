import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const parseToken = (rawToken) => {
  if (!rawToken || typeof rawToken !== "string") return null;
  try {
    const parts = rawToken.split(".");
    if (parts.length < 2) return null;
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch (err) {
    console.warn("Invalid auth token detected, clearing from storage.");
    localStorage.removeItem("token");
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => parseToken(localStorage.getItem("token")));

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(parseToken(newToken));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
