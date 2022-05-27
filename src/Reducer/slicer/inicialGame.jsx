import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../../utils/constants';
import { fetchQuestionFail,fetchQuestionsSuccess } from './game';

const initialState = {
    stage: 'START_GAME',
    username: '',
}

const gameState = createSlice({
    name: 'gameState',
    initialState,
    reducers: { 
        startGame(state, action) {
            console.log(action);
            state.username = action.payload.username;
            state.stage = stages.FETCHING_GAME;
        },
        cancelGame(state) {
            state.stage = stages.START_GAME
        },
        finishGame(state) {
            state.stage = stages.END_GAME
        },
        restartGame(state) {
            state.stage = stages.START_GAME
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuestionsSuccess, (state) => {
            state.stage = stages.GAME;
        })
        .addCase(fetchQuestionFail, (state) => {
            state.stage = stages.START_GAME;
        })
    }
})

export const { startGame, cancelGame,finishGame,restartGame } = gameState.actions;

export default gameState.reducer;