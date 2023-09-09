import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { New } from "../pages/new";
import { Profile } from "../pages/profile";
import { Details } from "../pages/details";
import { NotFound } from "../pages/notFound";

export function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
