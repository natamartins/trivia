import React from "react";

import "../Home/Home.css";

const Home = (props) => {
  function handleClick() {
    props.history.push("/quiz");
  }

  return (
    <div className="container-home">
      <h1>Trivia Quiz</h1>
      <p>Test Your Knowledge</p>
      <p>You will have 10 questions to answer</p>
      <p>Good Lock!</p>
      <button onClick={handleClick} className="button-Home">
        Start
      </button>
    </div>
  );
};

export default Home;
