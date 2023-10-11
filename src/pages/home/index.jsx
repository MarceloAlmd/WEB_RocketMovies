import * as Styles from "./styles";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/header";
import { Note } from "../../components/note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${title}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [title]);
  return (
    <Styles.Container>
      <Header setTitle={setTitle} />
      <Styles.MyMovies>
        <h1>Meus filmes</h1>
        <div className="content-button">
          <FiPlus size={20} />
          <button type="button">
            <Link to="/new">Adicionar filme</Link>
          </button>
        </div>
      </Styles.MyMovies>
      <Styles.Content>
        <main>
          {notes.map((note) => (
            <Note key={String(note.id)} data={note} />
          ))}
        </main>
      </Styles.Content>
    </Styles.Container>
  );
}
