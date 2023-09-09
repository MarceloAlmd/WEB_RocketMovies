import { BrowserRouter } from "react-router-dom";

import { AuthenticatedRoutes } from "./authenticated";
import { PublicRoutes } from "./public";

export function Routes() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}
