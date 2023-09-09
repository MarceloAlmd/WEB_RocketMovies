import * as Styles from "./styles";
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BackLink } from "../../components/backLink";
export function Profile() {
  return (
    <Styles.Container>
      <header>
        <BackLink to="#"/>
      </header>

      <Styles.Form>
        <Styles.Profile>
          <img src="https://github.com/marceloalmd.png" alt="foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Styles.Profile>

        <Input Icon={FiUser} placeholder="Name" />
        <Input Icon={FiMail} placeholder="E-mail" />
        <Input Icon={FiLock} placeholder="Senha Atual" />
        <Input Icon={FiLock} placeholder="Nova Senha" />

        <Button title="Salvar" />
      </Styles.Form>
    </Styles.Container>
  );
}
