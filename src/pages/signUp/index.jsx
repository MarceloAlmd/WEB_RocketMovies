import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import * as Styles from "./styles";

import { FormError } from "../../components/formError";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Alert } from "../../components/alert";
import { translation } from "../../utils/translation";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function SignUp() {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate(-1);
    }, 2000);
  };

  const handleCreateAccount = async () => {
    if (!name || !email || !password) {
      return setError("Prencha todos os campos");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return setEmailError("Formato de E-mail inválido");
    }

    if (password.length < 6) {
      return setPasswordError("A senha tem que ter no mínimo 6 caracteres");
    }

    await api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        handleShowAlert();
      })
      .catch((error) => {
        if (error.response) {
          const message = translation(error.response.data.message);
          setError(message);
        }
      });
  };

  const clearError = () => {
    setError("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <Styles.Container>
      <Styles.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          Icon={FiUser}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
            clearError();
          }}
        />

        <Input
          Icon={FiMail}
          type="text"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
            clearError();
          }}
        />

        {emailError && <FormError messageError={emailError} />}

        <Input
          Icon={FiLock}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            clearError();
          }}
        />
        {passwordError && <FormError messageError={passwordError} />}

        {error && <FormError messageError={error} />}

        <Button
          marginTop="1rem"
          title="Cadastrar"
          onClick={handleCreateAccount}
        />

        <Link to="/">
          <FiArrowLeft />
          voltar para o login
        </Link>
      </Styles.Form>

      <Styles.Background />

      {showAlert && <Alert message="Usuario criado com sucesso" />}
    </Styles.Container>
  );
}
