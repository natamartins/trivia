import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    category: [],
    error: null,
    score: null,
    currentQuestionIndex: null,
    answers: []
}

const quizState = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        fetchQuestionsSuccess(state, action) {
            state.questions = action.payload;
            state.category = action.payload;
            state.score = 0;
            state.currentQuestionIndex = 0;
            state.answers = [];
        },  
        fetchQuestionFail(state, action) {
            state.error = action.payload;
        },
        answerQuestion(state, action) {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            state.category += state.score += action.payload.answer === currentQuestion.correct_answer ? 1 : 0;    
            state.answers.push({
                question: currentQuestion.question,
                answer: action.payload.answer,
                correctAnswer: currentQuestion.correct_answer,
                isCorrect: action.payload.answer === currentQuestion.correct_answer
            })
        },
        nextQuestion(state) {
            state.currentQuestionIndex += 1;
        }
    }
})

export const { 
    fetchQuestionFail,
    fetchQuestionsSuccess,
    answerQuestion,
    nextQuestion
} = quizState.actions;

export default quizState.reducer;