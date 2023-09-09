import * as Styles from "./styles";

import { Header } from "../../components/header";
import { BackLink } from "../../components/backLink";
import { Input } from "../../components/input";
import { NewMovieInputTag } from "../../components/newMovieInputTag";

export function New() {
  return (
    <Styles.Container>
      <Header />

      <Styles.Content>
        <Styles.ContentTitleAndArrow>
          <BackLink to="#" marginLeft="0" />
          <h1>Novo Filme</h1>
        </Styles.ContentTitleAndArrow>

        <Styles.Form>
          <div className="content-inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua Nota (de 0 a 5)" />
          </div>

          <textarea placeholder="Observações" />

          <Styles.Markers>
            <h2>Marcadores</h2>

            <div>
              <NewMovieInputTag value="Ficção cientifica" readOnly />
              <NewMovieInputTag placeholder="Novo Marcador" isNew />
            </div>
          </Styles.Markers>

          <footer>
            <button className="button-delete">Excluir filme</button>
            <button className="button-save">Salvar alterações</button>
          </footer>
        </Styles.Form>
      </Styles.Content>
    </Styles.Container>
  );
}
