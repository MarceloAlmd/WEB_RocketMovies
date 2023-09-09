import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as Styles from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Styles.Container>
      <Styles.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input Icon={FiMail} type="text" placeholder="E-mail" />
        <Input Icon={FiLock} type="password" placeholder="Password" />

        <Button marginTop="1rem" title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Styles.Form>

      <Styles.Background />
    </Styles.Container>
  );
}
