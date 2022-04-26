import React from "react";
import "../style/Questions.css";

import Brain from  '../img/brain.png'

function Question({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  currentIndex,
  data: { question, correct_answer, answers, category },
}) {
  return (
    <>
      <div className="container-quest">
        <div className="question-Class">
           <div>
           <h4> Questions {currentIndex + 1} de 10</h4>
            <h4>  {category} </h4>
           </div>
            <span className="Brain-img">
              <img src={Brain} alt="Brain" />
            </span>
        </div>
        <div className="questions-All">
          <h1>{question}</h1>
        </div>
        <div className="button-overall">
          {answers.map((answer) => {
            const specialClassName = showAnswers
              ? answer === correct_answer
                ? "green-button"
                : "red-button"
              : "";
            return (
              <div className="box-buttonTrue">
                <button
                  className={`normal-button ${specialClassName}`}
                  onClick={() => handleAnswer(answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              </div>
            );
          })}
        </div>

        {showAnswers && (
          <button onClick={handleNextQuestion} className="NextStep">
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Question;
