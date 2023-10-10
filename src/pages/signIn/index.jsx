import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as Styles from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { FormError } from "../../components/formError";
import { translation } from "../../utils/translation";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      if (!email.includes("@") || !email.includes(".com")) {
        return setError("Formato de E-mail inválido");
      }

      if (password.length < 6) {
        return setError("A senha precisa ter no mínimo 6 caracteres");
      }

      await signIn({ email, password });
    } catch (error) {
      if (error.response) {
        const message = translation(error.response.data.message);
        return setError(message);
      }
    }
  };

  const clearError = () => {
    setError("");
  };

  return (
    <Styles.Container>
      <Styles.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          Icon={FiMail}
          type="text"
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
            clearError();
          }}
        />
        <Input
          Icon={FiLock}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            clearError();
          }}
        />

        {error && <FormError messageError={error} />}

        <Button marginTop="1rem" title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Styles.Form>

      <Styles.Background />
    </Styles.Container>
  );
}
