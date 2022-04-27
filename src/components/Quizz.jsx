
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import API from "../api/data";

import Question from "./questions.jsx";

import secondsToMinuts from "./time";

import "../style/Quiz.css";

import Icone from "../img/check.png";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [counter , setCounter] = useState(0);
  const [stopTime, setStopTime] = useState(false);
  
  useEffect(() => {
    API(questions, setQuestions)
  }, []);

  useEffect(() => {
    if (currentIndex < questions.length) {
      setTimeout(() => {
        setCounter(counter + 1)
      },1000)
    } else {
      setStopTime(counter)
    }
  },[currentIndex, questions, counter, stopTime])
   
  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  return questions.length > 0 ? (
    <div className="container-end">
      {currentIndex < questions.length ? (
        <Question
          handleAnswer={handleAnswer}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          score={score}
          counter={counter}
          currentIndex={currentIndex}
          data={questions[currentIndex]}
          totalQuestions={questions.length}
        />
      ) : (
        <div className="finish-result">
          <img src={Icone} alt="victory" className="icone-victory" />
          <h1>
            You got it right {score} out of {questions.length} in {secondsToMinuts(stopTime)}
          </h1>
          <Link className="return-to-home" to="/">
          return to home
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="container-end">Loading...</div>
  );
};

export default Quiz;
