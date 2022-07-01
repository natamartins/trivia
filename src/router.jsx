import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Game from "./components/Main.jsx";

import "./scss/styles.scss";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
