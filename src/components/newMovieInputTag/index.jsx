import * as Styles from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function NewMovieInputTag({
  placeholder,
  value,
  onClick,
  isNew,
  ...rest
}) {
  return (
    <Styles.Container isNew={isNew}>
      <input
        placeholder={placeholder}
        value={value}
        {...rest}
        readOnly={!isNew}
      />

      <button type="button" onClick={onClick} {...rest}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Styles.Container>
  );
}
