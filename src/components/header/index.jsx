import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import * as Styles from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../modal";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatar_img from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header({ setTitle }) {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatar_img;

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
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <Styles.Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <button onClick={handleShowModal}>Sair</button>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt={`Foto do usuário ${user.name}`} />
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
