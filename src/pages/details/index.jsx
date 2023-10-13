import * as Styles from "./styles";
import { AiOutlineClockCircle } from "react-icons/ai";

import { format, subHours } from "date-fns";
import { Header } from "../../components/header";
import { BackLink } from "../../components/backLink";
import { Rating } from "../../components/rating";
import { Tag } from "../../components/tag";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import avatar_img from "../../assets/avatar_placeholder.svg";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Alert } from "../../components/alert";

export function Details() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [note, setNote] = useState(null);

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const originalDate = new Date(note?.created_at);
  const adjustedDate = subHours(originalDate, 3);

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatar_img;

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/");
    }, 1000);
  };

  const handleDeleteNote = async () => {
    await api.delete(`/notes/${params.id}`);
    handleShowAlert();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setNote(response.data);
    }
    fetchNote();
  }, []);
  return (
    <Styles.Container>
      <Header />

      {note && (
        <Styles.Content>
          <header>
            <BackLink to="/" marginLeft="0" />

            <Button title="Deletar Nota" onClick={handleOpenModal} />
          </header>
          <Styles.ContentTitleAndRating>
            <h1>{note.title}</h1>
            <Rating rating={note.rating} size={20} />
          </Styles.ContentTitleAndRating>

          <Styles.ContentProfileAndCreatedAt>
            <img src={avatarUrl} alt={`${user.name} Usuário criador da nota`} />

            <span>Por: {user.name}</span>

            <span>
              <AiOutlineClockCircle />
              {format(adjustedDate, "dd/MM/yyyy 'Ás' HH:mm:ss")}
            </span>
          </Styles.ContentProfileAndCreatedAt>

          <Styles.ContentTags>
            {note.tags.map((tag) => (
              <Tag key={String(tag.id)} name={tag.name} />
            ))}
          </Styles.ContentTags>

          <Styles.ContentDescription>
            <span>{note.description}</span>
          </Styles.ContentDescription>
          {showModal && (
            <Modal
              message="Desejá deletar essa nota ?"
              cancel={handleCloseModal}
              onCLose={handleCloseModal}
              confirm={handleDeleteNote}
            />
          )}

          {showAlert && <Alert message="Nota deleta com sucesso" />}
        </Styles.Content>
      )}
    </Styles.Container>
  );
}
