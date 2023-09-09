import * as Styles from "./styles";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/header";
import { Note } from "../../components/note";

export function Home() {
  return (
    <Styles.Container>
      <Header />
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
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
          <Note
            data={{
              title: "InterStellar",
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga consequuntur magni! Repudiandae, sunt eos fuga dolorem nihil id inventore molestias pariatur ad omnis quibusdam ea architecto eaque quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam fuga c",
              tags: [
                { id: 1, name: "Ficção Científica" },
                { id: 2, name: "Drama" },
                { id: 3, name: "Familia" },
              ],
            }}
          />
        </main>
      </Styles.Content>
    </Styles.Container>
  );
}
