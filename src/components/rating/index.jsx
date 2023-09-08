import * as Styles from "./styles";

export function Rating({ rating }) {
  return (
    <Styles.Container>
      {rating === 1 ? (
        <div>
          <Styles.Rating />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
        </div>
      ) : null}

      {rating === 2 ? (
        <div>
          <Styles.Rating />
          <Styles.Rating />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
        </div>
      ) : null}
      {rating === 3 ? (
        <div>
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
          <Styles.EmptyStar />
          <Styles.EmptyStar />
        </div>
      ) : null}
      {rating === 4 ? (
        <div>
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
          <Styles.EmptyStar />
        </div>
      ) : null}
      {rating === 5 ? (
        <div>
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
          <Styles.Rating />
        </div>
      ) : null}
    </Styles.Container>
  );
}
