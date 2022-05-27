import { take, fork, put, call, delay, cancel } from 'redux-saga/effects';
import { cancelGame, startGame } from '../slicer/inicialGame';
import { fetchQuizFromApi } from '../../utils/api';
import { fetchQuestionFail,fetchQuestionsSuccess } from '../slicer/game';

function* fetchQuestionSaga() {
    try {
        yield delay(1000);
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionsSuccess(data));
    } catch (error) {
        yield put(fetchQuestionFail("เกิดข้อผิดพลาด"))
    }
}

function* cancelFetchQuiz() {
    while(true) {
        yield take(cancelGame.type);
        yield cancel(fetchQuizFromApi);
    }
}

export default function* stateGameSaga() {
    while(true) {
        yield take(startGame.type);
        const fetch = yield fork(fetchQuestionSaga);
        yield fork(cancelFetchQuiz, fetch)
    }
}