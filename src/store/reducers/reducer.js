import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/objectUpdater';

const initialState = {
    level: 1,
    score: 0,
    hasLevelStarted: false,
    hasGameEnded: false,
    isPaused: false,
    isOnIframe: false,
    showAds: false
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
        hasLevelStarted: true
    };
    return updateObject(state, updatedState);
};

const endGame = (state) => {
    const updatedState = { 
        hasGameEnded: true 
    };
    return updateObject(state, updatedState);
};

const restartGame = (state) => {
    const updatedState = { 
        level: 1,
        score: 0,
        hasLevelStarted: true,
        hasGameEnded: false
    };
    return updateObject(state, updatedState);
};

const abortGame = (state) => {
    const updatedState = { 
        level: 1,
        score: 0,
        isPaused: false,
        hasLevelStarted: false,
        hasGameEnded: false 
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

const setIframe = (state) => {
    const updatedState = {
        isOnIframe: true
    };
    return updateObject(state, updatedState);
};

const changeShowAds = (state, action) => {
    const updatedState = {
        showAds: action.value
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
            return restartGame(state);
        
        case actionTypes.ABORT_GAME:
            return abortGame(state);

        case actionTypes.TOGGLE_PAUSE:
            return togglePause(state);

        case actionTypes.SET_IFRAME:
            return setIframe(state);

        case actionTypes.CHANGE_SHOW_ADS:
            return changeShowAds(state, action);

        default:
            return state;
    }
};

export default reducer;