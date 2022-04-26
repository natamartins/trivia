import React from "react";
import BoxTimer from "./BoxTimer";
import "../pages/Questions.css";


function Question({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers, category },
}) {
  return (
    <>
      <BoxTimer />
      <div className="container-quest">
        <div className="questionClass">
          <span>
            <h1>Category: {category}</h1>
          </span>
          <h1 dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div></div>
        <div className="button-overall">
          {answers.map((answer) => {
            const specialClassName = showAnswers
              ? answer === correct_answer
                ? "green-button"
                : "red-button"
              : "";
            return (
              <div className="">
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
