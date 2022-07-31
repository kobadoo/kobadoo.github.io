import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/objectUpdater';
import {EMOJIS_MODE, NUMBERS_MODES, FLAGS_MODE, SHAPES_MODE} from '../constants';

const initialState = {
    level: 1,
    score: 0,
    hasLevelStarted: false,
    hasGameEnded: false,
    isPaused: false,
    showIntro: false,
    showAds: false,
    watchedVideo: false,
    mode: EMOJIS_MODE
};

const POINTS_PER_COMPLETED_LEVEL = 100;

const increaseScore = (state, action) => {
    const updatedState = { 
        score: state.score + action.addedScore 
    };
    return updateObject(state, updatedState);
};

const passLevel = (state) => {
    const updatedState = {
        level: state.level + 1,
        score: state.score + POINTS_PER_COMPLETED_LEVEL,
        hasLevelStarted: false
    };
    return updateObject(state, updatedState);
};

const startLevel = (state) => {
    const updatedState = {
        hasLevelStarted: true,
        showIntro: false
    };
    return updateObject(state, updatedState);
};

const endGame = (state) => {
    const updatedState = { 
        hasGameEnded: true 
    };
    return updateObject(state, updatedState);
};

const restartGame = (state, action) => {

    const getScoreFromLevel = level => {
        let score = 0;
        if (level > 1) {
            score = score + (level-1) * 100;
            for (var i = 1; i < level; i++) {
                score = score + ((2 + parseInt((i-1) / 3)) * 20);
            }
        }

        return score;
    };

    const hasWatchedVideo = level => {
        if (level > 1)
            return false;
        else
            return true;
    };

    const updatedState = { 
        level: action.value,
        score: getScoreFromLevel(action.value),
        hasLevelStarted: false,
        hasGameEnded: false,
        showIntro: true,
        watchedVideo: hasWatchedVideo(action.value)
    };
    return updateObject(state, updatedState);
};

const abortGame = (state) => {
    const updatedState = { 
        level: 1,
        score: 0,
        isPaused: false,
        hasLevelStarted: false,
        hasGameEnded: false,
        watchedVideo: false
    };
    return updateObject(state, updatedState);
};

const togglePause = (state) => {
    const updatedState = {
        isPaused: !state.isPaused,
        hasLevelStarted: state.isPaused ? true : false
    };    

    return updateObject(state, updatedState);
};

const changeMode = (state, action) => {
    const updatedState = {
        mode: action.value
    };
    return updateObject(state, updatedState);
};

const showIntro = (state) => {
    const updatedState = {
        showIntro: true
    };
    return updateObject(state, updatedState);
};

const changeShowAds = (state, action) => {
    const updatedState = {
        showAds: action.value
    };
    return updateObject(state, updatedState);
};

const changeWatchedVideo = (state, action) => {
    const updatedState = {
        watchedVideo: action.value
    };
    return updateObject(state, updatedState);
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREASE_SCORE:
            return increaseScore(state, action);

        case actionTypes.PASS_LEVEL:
            return passLevel(state);

        case actionTypes.START_LEVEL:
            return startLevel(state);
        
        case actionTypes.END_GAME:
            return endGame(state);
        
        case actionTypes.RESTART_GAME:
            return restartGame(state, action);
        
        case actionTypes.ABORT_GAME:
            return abortGame(state);

        case actionTypes.TOGGLE_PAUSE:
            return togglePause(state);

        case actionTypes.CHANGE_MODE:
            return changeMode(state, action);

        case actionTypes.SHOW_INTRO:
            return showIntro(state, action);

        case actionTypes.CHANGE_SHOW_ADS:
            return changeShowAds(state, action);

        case actionTypes.CHANGE_WATCHED_VIDEO:
            return changeWatchedVideo(state, action);

        default:
            return state;
    }
};

export default reducer;