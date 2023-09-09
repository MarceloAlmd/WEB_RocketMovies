import * as Styles from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackLink({ to, marginLeft }) {
  return (
    <Styles.Container marginLeft={marginLeft} to={to}>
      <FiArrowLeft />
      Voltar
    </Styles.Container>
  );
}
