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
        dispatch({type: actionTypes.END_GAME});
        // Send stats without waiting for it
        const state = getState();
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const stats = {
            mode: state.mode,
            level: state.level,
            score: state.score,
            timestamp: date + ' ' + time
        }
        const score = String(state.score);
        const mode = String(state.mode);
        eventGA(mode, state.level, score);
        axios.post('/stats.json', stats);
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

export const togglePause = () => {
    return {
        type: actionTypes.TOGGLE_PAUSE
    };
};

export const setIframe = (newValue) => {
    return {
        type: actionTypes.SET_IFRAME,
        value: newValue
    };
};

export const changeShowAds = (newValue) => {
    return {
        type: actionTypes.CHANGE_SHOW_ADS,
        value: newValue
    };
};

export const changeMode = (newValue) => {
    return {
        type: actionTypes.CHANGE_MODE,
        value: newValue
    };
};