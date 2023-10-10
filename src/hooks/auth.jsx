import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "../components/alert";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertUpdated, setShowAlertUpdated] = useState(false);
  const [data, setData] = useState({});

  console.log(data);
  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleShowAlertUserUpdated = () => {
    setShowAlertUpdated(true);

    setTimeout(() => {
      setShowAlertUpdated(false);
    }, 3000);
  };

  const updateProfile = async ({ user, avatarFile }) => {
    try {
      if (avatarFile) {
        const avatarFormData = new FormData();
        avatarFormData.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", avatarFormData);

        setData({ token: data.token, user: response.data });
      }

      const response = await api.put("/users", user);
      const userUpdated = response.data;

      localStorage.setItem("@rocketMovies:user", JSON.stringify(userUpdated));

      setData({ token: data.token, user: userUpdated });
      handleShowAlertUserUpdated();
    } catch (error) {
      throw error;
    }
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

  const logOut = () => {
    localStorage.removeItem("@rocketMovies:user");
    localStorage.removeItem("@rocketMovies:token");

    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@rocketMovies:user");
    const token = localStorage.getItem("@rocketMovies:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ signIn, user: data.user, logOut, updateProfile }}
      >
        {children}
      </AuthContext.Provider>
      {showAlert && <Alert message={`Seja Bem-Vindo ${data.user.name}`} />}
      {showAlertUpdated && <Alert message="Usuário atualizado com sucesso" />}
    </>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
