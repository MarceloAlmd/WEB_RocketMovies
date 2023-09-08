import * as Styles from "./styles";

export function Button({ title, ...rest }) {
  return (
    <Styles.Container type="button" {...rest}>
      {title}
    </Styles.Container>
  );
}
