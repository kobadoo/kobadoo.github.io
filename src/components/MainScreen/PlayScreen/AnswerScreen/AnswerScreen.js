import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';

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
                return classes.EmojiFailed;
            case nextEmoji:
                return classes.EmojiNext;
            default:
                return classes.AnswerScreenEmoji;
        }
    }

    return (
        <div className={classes.AnswerScreen}>
            <div>
                <h2>Select in the right order</h2>
            </div>
            {props.totalEmojis.map((value, index) => {
                if(disabledEmojis.indexOf(index) === -1) {
                    return <Emoji 
                            className={assignStyle(value)}
                            clickHandler={() => emojiClickHandler(index, value)}
                            key={index} 
                            num={value}
                            />
                }
                else {
                    return false;
                }
            })}
            <div className={classes.EmojisLeft}><strong>{props.numEmojis - correctEmojis}</strong> emojis left</div>
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