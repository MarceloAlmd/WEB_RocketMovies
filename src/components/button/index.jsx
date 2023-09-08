import * as Styles from "./styles";

export function Button({ title, marginTop, ...rest }) {
  return (
    <Styles.Container marginTop={marginTop} type="button" {...rest}>
      {title}
    </Styles.Container>
  );
}
