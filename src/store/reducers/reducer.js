import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/objectUpdater';

const initialState = {
    level: 1,
    score: 0,
    hasLevelStarted: false,
    hasGameEnded: false,
    isOnIframe: false
};

const POINTS_PER_COMPLETED_LEVEL = 100;

const increaseScore = (state, action) => {
    const updatedState = { 
        score: state.score + action.addedScore 
    };
    return updateObject(state, updatedState);
};

const passLevel = (state, action) => {
    const updatedState = {
        level: state.level + 1,
        score: state.score + POINTS_PER_COMPLETED_LEVEL,
        hasLevelStarted: false
    };
    return updateObject(state, updatedState);
};

const startLevel = (state, action) => {
    const updatedState = {
        hasLevelStarted: true
    };
    return updateObject(state, updatedState);
};

const endGame = (state, action) => {
    const updatedState = { 
        hasGameEnded: true 
    };
    return updateObject(state, updatedState);
};

const restartGame = (state, action) => {
    const updatedState = { 
        level: 1,
        score: 0,
        hasLevelStarted: true,
        hasGameEnded: false
    };
    return updateObject(state, updatedState);
};

const abortGame = (state, action) => {
    const updatedState = { 
        level: 1,
        score: 0,
        hasLevelStarted: false,
        hasGameEnded: false 
    };
    return updateObject(state, updatedState);
};

const setIframe = (state, action) => {
    const updatedState = {
        isOnIframe: true
    };
    return updateObject(state, updatedState);
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREASE_SCORE:
            return increaseScore(state, action);

        case actionTypes.PASS_LEVEL:
            return passLevel(state, action);

        case actionTypes.START_LEVEL:
            return startLevel(state, action);
        
        case actionTypes.END_GAME:
            return endGame(state, action);
        
        case actionTypes.RESTART_GAME:
            return restartGame(state, action);
        
        case actionTypes.ABORT_GAME:
            return abortGame(state, action);

        case actionTypes.SET_IFRAME:
            return setIframe(state, action);

        default:
            return state;
    }
};

export default reducer;