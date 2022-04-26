import React from "react";
import "../style/Questions.css";

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
        <div className="questionClass">
          <div>
            <span> Questão {currentIndex + 1} de 10</span>
            <br></br>
            <span>Category: {category} </span>
          </div>
          <h1>{question}</h1>
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
