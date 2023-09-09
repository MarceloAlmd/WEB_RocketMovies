import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import * as Styles from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Styles.Container>
      <h1>RocketMovies</h1>

      <div>
        <Input
          type="text"
          placeholder="Pesquisar pelo titulo"
          Icon={FiSearch}
        />
      </div>

      <Styles.Profile>
        <div>
          <Link to="/profile">
            <strong>Marcelo Magalhaes</strong>
          </Link>
          <button>Sair</button>
        </div>

        <Link to="/profile">
          <img src="https://github.com/marceloalmd.png" alt="foto do usuario" />
        </Link>
      </Styles.Profile>
    </Styles.Container>
  );
}
