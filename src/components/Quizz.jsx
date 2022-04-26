import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Question from "./Questions.jsx";

import "../style/Quiz.css";

import Icone from "../img/check.png";

const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.4),
        }));
        setQuestions(questions);
      });
  }, []);

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
          currentIndex={currentIndex}
          data={questions[currentIndex]}
        />
      ) : (
        <div className="container-end">
          <img src={Icone} alt="victory" className="icone-victory" />
          <h1>
            You got it right {score} out of {questions.length}
          </h1>
          <Link className="NextStep" to="/">
            Home
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="container-end">Loading...</div>
  );
};

export default Quiz;
