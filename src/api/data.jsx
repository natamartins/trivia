import Axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

const API = (questions, setQuestions) => {
  Axios.get(API_URL)
    .then((res) => res.data)
    .then((data) => {
      questions = data.results.map((question) => ({
        ...question,
        answers: [question.correct_answer, ...question.incorrect_answers].sort(
          () => Math.random() - 0.4
        ),
      }));

      setQuestions(questions);
    });
};

export default API;
