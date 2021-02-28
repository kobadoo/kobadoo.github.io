import axios from '../utils/axios-stats';
import { eventGA } from '../utils/Analytics';
import * as actionTypes from './actions';

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
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const stats = {
                level: state.level,
                score: state.score,
                timestamp: date + ' ' + time
            }
            axios.post('/stats.json', stats);
            const score = String(state.score);
            eventGA('Game Results', state.level, score);
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