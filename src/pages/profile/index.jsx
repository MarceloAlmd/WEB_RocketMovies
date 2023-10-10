import * as Styles from "./styles";
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { translation } from "../../utils/translation";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BackLink } from "../../components/backLink";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { FormError } from "../../components/formError";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [error, setError] = useState("");

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateProfile = async () => {
    try {
      if (!email.includes("@") || !email.includes(".com")) {
        return setError("Formato de E-mail inválido");
      }

      if (currentPassword || newPassword) {
        if (currentPassword.length < 6 || newPassword.length < 6) {
          return setError("A senha precisa de no mínimo 6 caracteres");
        }
      }

      const user = {
        name,
        email,
        current_password: currentPassword,
        new_password: newPassword,
      };
      await updateProfile({ user });
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
      <header>
        <BackLink to="/" />
      </header>

      <Styles.Form>
        <Styles.Profile>
          <img src="https://github.com/marceloalmd.png" alt="foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Styles.Profile>

        <Input
          Icon={FiUser}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          Icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            clearError();
          }}
        />
        <Input
          Icon={FiLock}
          placeholder="Senha Atual"
          type="password"
          onChange={(e) => {
            setCurrentPassword(e.target.value);
            clearError();
          }}
        />
        <Input
          Icon={FiLock}
          placeholder="Nova Senha"
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
            clearError();
          }}
        />

        {error && <FormError messageError={error} />}

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Styles.Form>
    </Styles.Container>
  );
}
