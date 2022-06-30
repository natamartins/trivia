import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/Main.jsx";
import Game from "./components/Main.jsx";
// import End from './components/End.jsx';
// import Game from './Reducer/slicer/game.jsx';

import "./scss/styles.scss";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />

        {/* <Route path="/end" element={<End />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
