import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';
import {NUMBERS_MODE} from '../../../../store/constants'

const POINTS_PER_CORRECT_ANSWER = 20;
const INTERVAL_BEFORE_GAME_OVER = 1000;

const AnswerScreen = (props) => {

    const [correctEmojis, setCorrectEmojis] = useState(0);
    const [disabledEmojis, setDisabledEmojis] = useState([]);
    const [failedEmoji, setFailedEmoji] = useState(null);
    const [nextEmoji, setNextEmoji] = useState(null);

    useEffect(() => {
        if(correctEmojis === props.numEmojis) {
            props.onLevelPassed();
            if(props.isLastLevel) {
                props.onEndGame();
            }
        }
    }, [correctEmojis]);

    const emojiClickHandler = (index, value) => {

        if (props.emojis[correctEmojis] === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            setDisabledEmojis(prevList => [...prevList,index]);
            setCorrectEmojis(prevCount => prevCount + 1 );
        } 
        else {
            setFailedEmoji(value);
            setNextEmoji(props.emojis[correctEmojis]);
            const timeout = setInterval(() => {
                props.onEndGame();
                clearInterval(timeout);
            }, INTERVAL_BEFORE_GAME_OVER);    
        }
    }

    const assignStyle = (value) => {
        switch (value) {
            case failedEmoji:
                return classes.ItemFailed;
            case nextEmoji:
                return classes.ItemNext;
            default:
                return classes.AnswerScreenItem;
        }
    }

    return (
        <div className={classes.AnswerScreen}>
            <div>
                <h2>Select in the right order</h2>
            </div>
            {props.totalEmojis.map((value, index) => {
                if(disabledEmojis.indexOf(index) === -1) {
                    switch (props.mode) {
                        case NUMBERS_MODE:
                            return <div 
                                className={classes.Numbers + ' ' + ((index % 2) ? classes.EvenItem : classes.OddItem ) + ' ' + assignStyle(value) }
                                onClick={() => emojiClickHandler(index, value)}
                                key={index} 
                                >{value}</div>
                        default: // EMOJIS_MODE
                            return <Emoji 
                                className={classes.Emojis + ' ' + assignStyle(value)}
                                clickHandler={() => emojiClickHandler(index, value)}
                                key={index} 
                                num={value} />
                    }
                }
                else {
                    return false;
                }
            })}
            <div className={classes.ItemsLeft}><strong>{props.numEmojis - correctEmojis}</strong> emojis left</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLevelPassed: () => dispatch(passLevel()),
        onEndGame: () => dispatch(endGame()),
        onScoreIncreased: (addedScr) => dispatch(increaseScore(addedScr))
    };
};

export default connect(null, mapDispatchToProps)(AnswerScreen);