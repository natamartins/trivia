import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../Reducer/slicer/inicialGame";

const Start = () => {
  const start = useRef("");
  const dispatch = useDispatch();

  const startGameHandle = () => {
    dispatch(startGame({ start }));
  };

  return (
    <div className="container-start">
    <h1>Trivia Quiz</h1>
      <p>Test Your Knowledge</p>
      <p>You will have 10 questions to answer</p>
      <p>Good Lock!</p>
          <button
          className="button"
            onClick={startGameHandle}
            type="submit"
          >
            Start
          </button>
    </div>
  );
};

export default Start;