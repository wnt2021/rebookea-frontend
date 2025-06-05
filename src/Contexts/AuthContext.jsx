import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1];

    return cookieValue || null;
  };

  useEffect(() => {
    const cookieToken = getCookie("token");
    if (cookieToken) {
      setToken(cookieToken);
    }
    setLoading(false);
  }, []);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const removeCookie = () => {
    deleteCookie("token");
    setToken(null);
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, removeCookie, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
