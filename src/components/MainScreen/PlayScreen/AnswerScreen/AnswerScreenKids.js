import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import {KidsEmoji, KidsQuestion, playAudioByItemNumber} from '../../../../utils/Modes/Kids';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';
import {POINTS_PER_CORRECT_ANSWER, POINTS_GAME_COMPLETED} from '../../../../store/constants';
import Applause from '../../../../audio/applause.mp3';
import Lost from '../../../../audio/lost.mp3';
import Volume from '../../../../images/audio.png';

const INTERVAL_BEFORE_GAME_OVER = 5000;

const AnswerScreenKids = (props) => {

    const [lostGame, setLostGame] = useState(false);
    const [correctItems, setCorrectItems] = useState(0);
    const [disabledItems, setDisabledItems] = useState([]);
    const [failedItem, setFailedItem] = useState(null);
    const [expectedItem, setExpectedItem] = useState(null);
    const [useTouch, setUseTouch] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if(correctItems === props.numItems) {            
            if(props.isLastLevel) {
                props.onScoreIncreased(POINTS_GAME_COMPLETED);
                props.onEndGame();
            }
            else {
                props.audioObject.src=Applause;
                props.audioObject.play();
                props.audioObject.playbackRate = 1.25;
                props.onLevelPassed();
            }
        }
        else {
            playAudioByItemNumber(props.itemList[correctItems], props.lang, props.audioObject, true);
        }
    }, [correctItems, props]);

    /* onTouchStart (mobile/tablet) triggers, once done, the onMouseDown / onClick unless we prevent it this way */
    const handleTouchStart = (index, value) => {
        setUseTouch(true);
        itemClickHandler(index, value);
    }

    const handleMouseDown = (index, value) => {
        if(useTouch) {
            return;
        }
        itemClickHandler(index, value);
    }

    const itemClickHandler = (index, value) => {

        if (props.itemList[correctItems] === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            setDisabledItems(prevList => [...prevList,index]);
            setCorrectItems(prevCount => prevCount + 1 );
        } 
        else if (failedItem === null) { // Avoid clicking again after failure
            props.audioObject.src=Lost;
            props.audioObject.play();
            setLostGame(true);
            setFailedItem(value);
            setExpectedItem(props.itemList[correctItems]);
            const timeout = setInterval(() => {
                props.onEndGame();
                clearInterval(timeout);
            }, INTERVAL_BEFORE_GAME_OVER);    
        }
    }

    const assignStyle = (value, index) => {
        if (disabledItems.includes(index)) {
            return classes.ItemCorrect;
        }

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
                {correctItems < props.numItems ? <KidsQuestion num={props.itemList[correctItems]} lang={props.lang}/> : null }
                <img src={Volume} className={classes.AudioIcon} 
                    onClick={() => playAudioByItemNumber(props.itemList[correctItems], props.lang, props.audioObject, true)} width="50px" alt="Play audio" />
            </div>
            <div className={classes.ItemsList}>
            {props.totalItems.map((value, index) => {
                return <KidsEmoji
                    className={classes.Kids + ' ' + assignStyle(value, index)}
                    clickHandler={() => handleMouseDown(index, value)}
                    touchHandler={() => handleTouchStart(index, value)}
                    key={index} 
                    num={value}
                    lang={props.lang} />;
            })}
            </div>

            {lostGame ? <div className={classes.ItemsLeft}><strong>Ooops!</strong> Wrong one</div> 
                : <div className={classes.ItemsLeft}><strong>{props.numItems - correctItems}</strong> left</div>}

        </div>
    );
}

const mapStateToProps = state => {
    return {
        lang: state.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLevelPassed: () => dispatch(passLevel()),
        onEndGame: () => dispatch(endGame()),
        onScoreIncreased: (addedScr) => dispatch(increaseScore(addedScr))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerScreenKids);