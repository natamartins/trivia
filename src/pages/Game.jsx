import React, { useState, useEffect } from "react";
import {decode} from 'html-entities';
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../Reducer/slicer/game";
import { finishGame } from "../Reducer/slicer/inicialGame";

import Brain from  '../img/relogio.png'

const Game
 = () => {
  const [timeleft, settimeleft] = useState(60);

  const dispatch = useDispatch();

  const score = useSelector((state) => state.quizState.score);


  const questionIndex = useSelector(
    (state) => state.quizState.currentQuestionIndex
  );

  const currentQuestion = useSelector(
    (state) => state.quizState.questions[questionIndex].question
  );

  const answerHandle = (answer) => {
    dispatch(answerQuestion({ answer }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(interval);
        dispatch(finishGame());
      }
      settimeleft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },);

  return (
    <div className="container-quest">
      <div className="container-quest-new">
      <div>
      <p>
        category : {}
      </p>
      <p>
       Question {questionIndex + 1} / 10{" "}
      </p>
      </div>
      <div className="containe-img">  
      <p> {timeleft}</p>
      <img src={Brain} alt="Brain" className="BrainIMG" />
      </div>
      </div>
      <h1>{decode(currentQuestion, {level: 'all'})}</h1>

      <div className="container-buton-game" >
        <button
        className="button"
          onClick={() => answerHandle("True")}
        >
          true
        </button>
        <button
        className="button"
          onClick={() => answerHandle("False")}
        >
          false
        </button>
      </div>
    </div>
  );
};

export default Game
;
