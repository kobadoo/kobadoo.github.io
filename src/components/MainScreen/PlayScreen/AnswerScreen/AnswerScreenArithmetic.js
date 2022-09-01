import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';

const POINTS_PER_CORRECT_ANSWER = 20;
const INTERVAL_BEFORE_GAME_OVER = 4000;

const AnswerScreenArithmetic = (props) => {

    const [lostGame, setLostGame] = useState(false);
    const [failedItem, setFailedItem] = useState(null);
    const [expectedItem, setExpectedItem] = useState(null);

    const itemClickHandler = (value) => {

        if (props.correctAnswer === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            if(props.isLastLevel) {
                props.onEndGame();
            }
            else {
                props.onLevelPassed();
            }
        } 
        else {
            setLostGame(true);
            setFailedItem(value);
            setExpectedItem(props.correctAnswer);
            const timeout = setInterval(() => {
                props.onEndGame();
                clearInterval(timeout);
            }, INTERVAL_BEFORE_GAME_OVER);    
        }
    }

    const assignStyle = (value) => {
        switch (value) {
            case failedItem:
                return classes.ItemFailed;
            case expectedItem:
                return classes.ItemNext;
            default:
                return classes.AnswerScreenItem;
        }
    }

    return (
        <div className={classes.AnswerScreen}>
            <div>
                <h2>Select the summation result</h2>
            </div>
            <div className={classes.ItemsList}>
            {props.possibleAnswers.map((value, index) => {
                return <div 
                    className={classes.Numbers + ' ' + ((index % 2) ? classes.EvenItem : classes.OddItem ) + ' ' + assignStyle(value) }
                    onClick={() => itemClickHandler(value)}
                    key={index} 
                    >{value}</div>
            })}
            </div>

            {lostGame ? <div className={classes.ItemsLeft}><strong>Ooops!</strong> Wrong one</div> : null}

        </div>
    );
}

const mapStateToProps = state => {
    return {
        showAds: state.showAds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLevelPassed: () => dispatch(passLevel()),
        onEndGame: () => { dispatch(endGame()) },
        onScoreIncreased: (addedScr) => dispatch(increaseScore(addedScr))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerScreenArithmetic);