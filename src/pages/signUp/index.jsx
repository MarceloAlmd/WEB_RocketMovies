import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as Styles from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Styles.Container>
      <Styles.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input Icon={FiUser} type="text" placeholder="Name" />
        <Input Icon={FiMail} type="text" placeholder="E-mail" />
        <Input Icon={FiLock} type="password" placeholder="Password" />

        <Button marginTop="1rem" title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          voltar para o login
        </Link>
      </Styles.Form>

      <Styles.Background />
    </Styles.Container>
  );
}
