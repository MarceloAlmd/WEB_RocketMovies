import * as Styles from "./styles";

export function Tag({ name, ...rest }) {
  return <Styles.Container {...rest}>{name}</Styles.Container>;
}
