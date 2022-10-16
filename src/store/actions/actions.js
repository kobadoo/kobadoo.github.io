import axios from '../../utils/axios-stats';
import { eventGA } from '../../utils/Analytics';
import * as actionTypes from './actionTypes';
import modes_config from '../../utils/Modes/modes_config.json';

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
            timestamp: date + ' ' + time,
            language: state.lang
        }
        const mode = modes_config[state.mode].name;
        eventGA('Events by Mode', mode);
        eventGA('Events by Level', state.level);
        axios.post('/stats.json', stats);
    };
};

export const startLevel = () => {
    return {
        type: actionTypes.START_LEVEL
    };
};

export const restartGame = (newValue) => {
    return {
        type: actionTypes.RESTART_GAME,
        value: newValue
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

export const changeMode = (newValue) => {
    return {
        type: actionTypes.CHANGE_MODE,
        value: newValue
    };
};

export const changeLanguage = (newValue) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        value: newValue
    };
};

export const showIntro = () => {
    return {
        type: actionTypes.SHOW_INTRO
    };
};

export const changeShowAds = (newValue) => {
    return {
        type: actionTypes.CHANGE_SHOW_ADS,
        value: newValue
    };
};

export const changeWatchedVideo = (newValue) => {
    return {
        type: actionTypes.CHANGE_WATCHED_VIDEO,
        value: newValue
    };
};

export const activateAudio = (newValue) => {
    return {
        type: actionTypes.ACTIVATE_AUDIO,
        value: newValue
    };
};

export const changeScreen = (newValue) => {
    return {
        type: actionTypes.CHANGE_SCREEN,
        value: newValue
    };
};