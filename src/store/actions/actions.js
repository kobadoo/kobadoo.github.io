import axios from '../../utils/axios-stats';
import { eventGA } from '../../utils/Analytics';
import * as actionTypes from './actionTypes';

export const increaseScore = (addedScore) => {
    return {
        type: actionTypes.INCREASE_SCORE,
        addedScore: addedScore
    };
};

export const passLevel = () => {
    return {
        type: actionTypes.PASS_LEVEL
    };
};

export const endGame = () => {
    return (dispatch, getState) => {
        const state = getState();
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const stats = {
            level: state.level,
            score: state.score,
            timestamp: date + ' ' + time
        }
        const score = String(state.score);
        eventGA('Game Results', state.level, score);
        // No need to wait for response since it's just stats
        axios.post('/stats.json', stats);
        dispatch({type: actionTypes.END_GAME});
    };
};

export const startLevel = () => {
    return {
        type: actionTypes.START_LEVEL
    };
};

export const restartGame = () => {
    return {
        type: actionTypes.RESTART_GAME
    };
};

export const abortGame = () => {
    return {
        type: actionTypes.ABORT_GAME
    };
};