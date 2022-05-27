import { combineReducers } from 'redux';
import gameState from './slicer/inicialGame';
import quizState from './slicer/game';

export default combineReducers(
    {
        gameState,
        quizState
    }
    );