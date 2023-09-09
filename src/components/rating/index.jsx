import * as Styles from "./styles";

export function Rating({ rating, size }) {
  return (
    <Styles.Container>
      {rating === 1 ? (
        <div>
          <Styles.Rating size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
        </div>
      ) : null}

      {rating === 2 ? (
        <div>
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
        </div>
      ) : null}
      {rating === 3 ? (
        <div>
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.EmptyStar size={size} />
          <Styles.EmptyStar size={size} />
        </div>
      ) : null}
      {rating === 4 ? (
        <div>
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.EmptyStar size={size} />
        </div>
      ) : null}
      {rating === 5 ? (
        <div>
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
          <Styles.Rating size={size} />
        </div>
      ) : null}
    </Styles.Container>
  );
}
