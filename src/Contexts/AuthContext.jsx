import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (token) => {
    localStorage.setItem("userId", token);
    setToken(token);
  };

  const removeCookie = () => {
    setToken(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("userId");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, removeCookie, loading, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
