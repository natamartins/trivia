import React from "react";
import { useSelector } from "react-redux";
import * as stages from "../utils/constants";

//Page
import EndGame from "./End";
import StartGame from "../pages/Start";
import FetchingPage from "./Fetch";
import GamePage from "./Game";

const Main = () => {
  const currentState = useSelector((state) => state.gameState.stage);

  let displayedPage;

  switch (currentState) {
    case stages.START_GAME:
      displayedPage = <StartGame />;
      break;

    case stages.FETCHING_GAME:
      displayedPage = <FetchingPage />;
      break;

    case stages.GAME:
      displayedPage = <GamePage />;
      break;

    case stages.END_GAME:
      displayedPage = <EndGame />;
      break; 

    default:
      break;
  }

  return <>{displayedPage}</>;
};

export default Main;
