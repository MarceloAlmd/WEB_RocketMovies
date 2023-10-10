import { BrowserRouter } from "react-router-dom";

import { AuthenticatedRoutes } from "./authenticated";
import { PublicRoutes } from "./public";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <AuthenticatedRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}
