import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import {KidsEmoji, KidsQuestion, playQuestionAudioByItemNumber} from '../../../../utils/Modes/Kids';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';
import Applause from '../../../../audio/applause.mp3';
import Lost from '../../../../audio/lost.mp3';
import Volume from '../../../../images/audio.png';

const POINTS_PER_CORRECT_ANSWER = 20;
const INTERVAL_BEFORE_GAME_OVER = 5000;

const AnswerScreenKids = (props) => {

    const [lostGame, setLostGame] = useState(false);
    const [correctItems, setCorrectItems] = useState(0);
    const [disabledItems, setDisabledItems] = useState([]);
    const [failedItem, setFailedItem] = useState(null);
    const [expectedItem, setExpectedItem] = useState(null);

    useEffect(() => {
        if(correctItems === props.numItems) {            
            if(props.isLastLevel) {
                props.onEndGame();
            }
            else {
                new Audio(Applause).play();
                props.onLevelPassed();
            }
        }
        else {
            playQuestionAudioByItemNumber(props.itemList[correctItems]);
        }
    }, [correctItems, props]);

    const itemClickHandler = (index, value) => {

        if (props.itemList[correctItems] === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            setDisabledItems(prevList => [...prevList,index]);
            setCorrectItems(prevCount => prevCount + 1 );
        } 
        else {
            new Audio(Lost).play();
            setLostGame(true);
            setFailedItem(value);
            setExpectedItem(props.itemList[correctItems]);
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
            <div className={classes.Question}>
                {correctItems < props.numItems ? <KidsQuestion num={props.itemList[correctItems]} /> : null }
                <img src={Volume} className={classes.AudioIcon} onClick={() => playQuestionAudioByItemNumber(props.itemList[correctItems])} width="50px" alt="Play audio" />
            </div>
            <div className={classes.ItemsList}>
            {props.totalItems.map((value, index) => {
                if(disabledItems.indexOf(index) === -1) {
                    return <KidsEmoji
                        className={classes.Kids + ' ' + assignStyle(value)}
                        clickHandler={() => itemClickHandler(index, value)}
                        key={index} 
                        num={value} />;
                }
                else {
                    return false;
                }
            })}
            </div>

            {lostGame ? <div className={classes.ItemsLeft}><strong>Ooops!</strong> Wrong one</div> 
                : <div className={classes.ItemsLeft}><strong>{props.numItems - correctItems}</strong> left</div>}

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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerScreenKids);