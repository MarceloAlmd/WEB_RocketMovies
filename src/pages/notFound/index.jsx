import * as Styles from "./styles";
import { TbError404Off } from "react-icons/tb";
export function NotFound() {
  return (
    <Styles.Container>
      <Styles.Content>
        <h1>Page Not Found !</h1>
        <TbError404Off />
      </Styles.Content>
    </Styles.Container>
  );
}
