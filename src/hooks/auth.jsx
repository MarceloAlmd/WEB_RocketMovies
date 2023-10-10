import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "../components/alert";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({});

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token", token);

      setData({ token, user });
      handleShowAlert();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("@rocketMovies:user");
    const token = localStorage.getItem("@rocketMovies:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.stringify(user),
      });
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ signIn, user: data.user }}>
        {children}
      </AuthContext.Provider>
      {showAlert && <Alert message={`Seja Bem-Vindo ${data.user.name}`} />}
    </>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
