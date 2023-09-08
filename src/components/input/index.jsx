import * as Styles from "./styles";

export function Input({ Icon, ...rest }) {
  return (
    <Styles.Container>
      {Icon && <Icon size="20"/>}
      <input {...rest} />
    </Styles.Container>
  );
}
