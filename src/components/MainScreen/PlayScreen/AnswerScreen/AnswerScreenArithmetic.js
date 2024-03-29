import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';
import {POINTS_PER_CORRECT_ANSWER, POINTS_GAME_COMPLETED, TIMEOUT_BEFORE_GAME_OVER} from '../../../../store/constants';

const AnswerScreenArithmetic = (props) => {

    const timeoutRef = useRef(null);
    const [lostGame, setLostGame] = useState(false);
    const [failedItem, setFailedItem] = useState(null);
    const [expectedItem, setExpectedItem] = useState(null);

    useEffect(()=>{
        // Ensure timeout is cleared when unmounted (e.g. abortGame via Toolbar)
        () => clearTimeout(timeoutRef.current)
    },[]);

    const itemClickHandler = (value) => {

        if (props.correctAnswer === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            if(props.isLastLevel) {
                props.onScoreIncreased(POINTS_GAME_COMPLETED);
                props.onEndGame();
            }
            else {
                props.onLevelPassed();
            }
        } 
        else if (failedItem === null) { // Avoid clicking again after failure
            setLostGame(true);
            setFailedItem(value);
            setExpectedItem(props.correctAnswer);
            if(timeoutRef.current) { clearTimeout(timeoutRef.current); }
            timeoutRef.current = setTimeout(() => {
                props.onEndGame();
            }, TIMEOUT_BEFORE_GAME_OVER);
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

const mapDispatchToProps = dispatch => {
    return {
        onLevelPassed: () => dispatch(passLevel()),
        onEndGame: () => dispatch(endGame()) ,
        onScoreIncreased: (addedScr) => dispatch(increaseScore(addedScr))
    };
};

export default connect(null, mapDispatchToProps)(AnswerScreenArithmetic);