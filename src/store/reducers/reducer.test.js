import reducer from './reducer';

describe('Switch', () => {

    it('should leave the state unchanged if no state or action is provided', () => {
        expect(reducer(undefined, {})).toEqual({
            level: 1,
            score: 0,
            hasLevelStarted: false,
            hasGameEnded: false
        });
    })
});

describe('increaseScore()', () => {

    it('should add the scores successfully', () => {
        expect(reducer({score: 30}, {
            type: 'INCREASE_SCORE',
            addedScore: 10
        })).toEqual({
            score: 40
        });
    })
});