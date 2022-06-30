import Axios from "axios";

export const fetchQuizFromApi = () => {
  const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

  return Axios.get(API_URL)
    .then(({ data }) => data.results)
    .catch((err) => Promise.reject(err));
};
