import { Rating } from "../rating";
import { Tag } from "../tag";
import * as Styles from "./styles";

export function Note({ data, ...rest }) {
  return (
    <Styles.Container {...rest}>
      <h2>{data.title}</h2>
      <Rating rating={data.rating} />
      <span>{data.description}</span>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </footer>
      )}
    </Styles.Container>
  );
}
