import Axios from "axios";
import React, { useState, useEffect } from "react";
import Question from "../components/questions.jsx";

import "../style/Quiz.css";

import Icone from "../img/correct.png";

const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

function Quiz() {
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
          answers: [question.correct_answer, ...question.incorrect_answers],
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
    <div className="container">
      {currentIndex >= questions.length ? (
        <div>
          <img src={Icone} alt="victory" className="icone-victory" />
          <h1>
            you got it right {score} out of {questions.length}
          </h1>
        </div>
      ) : (
        <Question
          handleAnswer={handleAnswer}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          score={score}
          currentIndex={currentIndex}
          data={questions[currentIndex]}
        />
      )}
    </div>
  ) : (
    <div className="container">Loading...</div>
  );
}

export default Quiz;
