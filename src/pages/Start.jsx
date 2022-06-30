import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGame } from "../Reducer/slicer/inicialGame";

const Start = () => {
  const dispatch = useDispatch();

  const startGameHandle = () => {
    dispatch(startGame());
  };

  return (
    <div className="container-start">
      <h1>Trivia Quiz</h1>
      <p>Test Your Knowledge</p>
      <p>You will have 10 questions to answer</p>
      <p>Good Lock!</p>
      
      <Link to="/game" className="button" onClick={startGameHandle}>
        Start
      </Link>
    </div>
  );
};

export default Start;
