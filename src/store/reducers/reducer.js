import * as actionTypes from '../actions/actionTypes';

const initialState = {
    level: 1,
    score: 0,
    hasLevelStarted: false,
    hasGameEnded: false
};

const POINTS_PER_COMPLETED_LEVEL = 100;

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREASE_SCORE:
            return {
                ...state,
                score: state.score + action.addedScore
            };

        case actionTypes.PASS_LEVEL:
            return {
                ...state,
                level: state.level + 1,
                score: state.score + POINTS_PER_COMPLETED_LEVEL,
                hasLevelStarted: false
            };

        case actionTypes.START_LEVEL:
            return {
                ...state,
                hasLevelStarted: true
            };
        
        case actionTypes.END_GAME:
            return {
                ...state,
                hasGameEnded: true
            };
        
        case actionTypes.RESTART_GAME:
            return {
                ...state,
                level: 1,
                score: 0,
                hasLevelStarted: true,
                hasGameEnded: false
            };
        
        case actionTypes.ABORT_GAME:
            return {
                ...state,
                level: 1,
                score: 0,
                hasLevelStarted: false,
                hasGameEnded: false
            };

        default:
            return state;
    }
};

export default reducer;