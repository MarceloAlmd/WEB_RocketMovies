import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import * as Styles from "./styles";

export function Header() {
  return (
    <Styles.Container>
      <h1>RocketMovies</h1>

      <Input type="text" placeholder="Pesquisar pelo titulo" Icon={FiSearch} />

      <Styles.Profile>
        <div>
          <strong>Marcelo Magalhaes</strong>
          <button>Sair</button>
        </div>

        <img src="https://github.com/marceloalmd.png" alt="foto do usuario" />
      </Styles.Profile>
    </Styles.Container>
  );
}
