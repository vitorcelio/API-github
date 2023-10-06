import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import RepositoriesPages from "./pages/RepositoriesPages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:login/repositories" element={<RepositoriesPages />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
