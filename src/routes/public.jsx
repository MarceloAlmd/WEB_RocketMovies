import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { NotFound } from "../pages/notFound";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
