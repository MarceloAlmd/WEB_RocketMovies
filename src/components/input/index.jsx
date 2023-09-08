import * as Styles from "./styles";

export function Input({ Icon, type, placeholder, ...rest }) {
  return (
    <Styles.Container>
      {Icon && <Icon size="20" />}
      <input type={type} placeholder={placeholder} {...rest} />
    </Styles.Container>
  );
}
