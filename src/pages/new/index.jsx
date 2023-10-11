import * as Styles from "./styles";

import { FormError } from "../../components/formError";
import { Alert } from "../../components/alert";
import { Header } from "../../components/header";
import { BackLink } from "../../components/backLink";
import { Input } from "../../components/input";
import { NewMovieInputTag } from "../../components/newMovieInputTag";
import { useState } from "react";
import { api } from "../../services/api";
import { translation } from "../../utils/translation";
import { useNavigate } from "react-router-dom";

export function New() {
  const [titleError, setTitleError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const [messageForAlert, setMessageForAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  const handleAddTag = () => {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  };

  const handleRemoveTag = (tagName) => {
    setTags((prevState) => prevState.filter((tag) => tag !== tagName));
  };

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(true);
      navigate("/");
    }, 2000);
  };

  const handleCreateNewMovie = async () => {
    try {
      if (!title) {
        return setTitleError("Informe o título do filme");
      }
      if (!rating) {
        return setRatingError("Digite uma nota entre 0 e 5");
      }

      if (rating > 5) {
        return setRatingError("Digite uma nota entre 0 e 5");
      }

      if (tags.length === 0) {
        return setTagsError("Informe pelo menos uma tag");
      }

      const response = await api.post("/notes", {
        title,
        description,
        rating,
        tags,
      });

      const message = translation(response.data.message);
      setMessageForAlert(message);
      handleShowAlert();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearAllFields = () => {
    setTitle("");
    setRating("");
    setDescription("");

    setTags([]);
  };

  const clearError = () => {
    setTitleError("");
    setRatingError("");
    setTagsError("");
  };

  return (
    <Styles.Container>
      <Header />

      <Styles.Content>
        <Styles.ContentTitleAndArrow>
          <BackLink to="/" marginLeft="0" />
          <h1>Novo Filme</h1>
        </Styles.ContentTitleAndArrow>

        <Styles.Form>
          <div className="content-inputs">
            <Input
              placeholder="Título"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                clearError();
              }}
            />

            <Input
              placeholder="Sua Nota (de 0 a 5)"
              onChange={(e) => {
                setRating(e.target.value);
                clearError();
              }}
              value={rating}
            />
          </div>

          {titleError && <FormError messageError={titleError} />}
          {ratingError && <FormError messageError={ratingError} />}

          <textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <Styles.Markers>
            <h2>Marcadores</h2>

            <div>
              <NewMovieInputTag
                placeholder="Novo Marcador"
                value={newTag}
                isNew
                onClick={handleAddTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              {tags.map((tag, index) => (
                <NewMovieInputTag
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
            </div>
            {tagsError && <FormError messageError={tagsError} />}
          </Styles.Markers>

          <footer>
            <button
              className="button-delete"
              type="button"
              onClick={handleClearAllFields}
            >
              Excluir filme
            </button>
            <button
              className="button-save"
              type="button"
              onClick={handleCreateNewMovie}
            >
              Salvar alterações
            </button>
          </footer>
        </Styles.Form>

        {showAlert && <Alert message={messageForAlert} />}
      </Styles.Content>
    </Styles.Container>
  );
}
