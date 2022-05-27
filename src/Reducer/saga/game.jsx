import { take, race, delay, put } from 'redux-saga/effects';
import { fetchQuestionsSuccess, answerQuestion, nextQuestion } from '../slicer/game'; 
import { finishGame } from '../slicer/inicialGame';

function* answerSaga() {
    for (let i = 0; i < 10; i++) {
        yield take(answerQuestion.type);
        yield put(nextQuestion());
    }
}

export default function* gameSaga() {
    while(true) {
        yield take(fetchQuestionsSuccess.type);

        yield race({
            delay: delay(60000),
            done: answerSaga()
        })

        yield put(finishGame());
    }
}