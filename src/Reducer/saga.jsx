import { all } from "redux-saga/effects";
import startGame from "./saga/inicialGame";
import game from "./saga/game";

export default function* rootSaga() {
  yield all([startGame(), game()]);
}
