import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import * as Styles from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../modal";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    navigate("/");
    logOut();
  };

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
          <button onClick={handleShowModal}>Sair</button>
        </div>

        <Link to="/profile">
          <img src="https://github.com/marceloalmd.png" alt="foto do usuario" />
        </Link>
      </Styles.Profile>

      {showModal && (
        <Modal
          onCLose={handleCloseModal}
          message="Deseja sair da aplicação?"
          cancel={handleCloseModal}
          confirm={handleLogout}
        />
      )}
    </Styles.Container>
  );
}
