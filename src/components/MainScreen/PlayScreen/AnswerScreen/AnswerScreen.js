import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import Emoji from '../../../../utils/Modes/Emoji';
import {Flag} from '../../../../utils/Modes/Flag';
import { Shape } from '../../../../utils/Modes/Shapes';
import { PlayingCard } from '../../../../utils/Modes/Card';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';
import {NUMBERS_MODE, FLAGS_MODE, SHAPES_MODE, CARDS_MODE} from '../../../../store/constants'

const POINTS_PER_CORRECT_ANSWER = 20;
const INTERVAL_BEFORE_GAME_OVER = 5000;

const AnswerScreen = (props) => {

    const [lostGame, setLostGame] = useState(false);
    const [correctItems, setCorrectItems] = useState(0);
    const [disabledItems, setDisabledItems] = useState([]);
    const [failedItem, setFailedItem] = useState(null);
    const [expectedItem, setExpectedItem] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if(correctItems === props.numItems) {            
            if(props.isLastLevel) {
                props.onEndGame();
            }
            else {
                props.onLevelPassed();
            }
        }
    }, [correctItems]);

    const itemClickHandler = (index, value) => {

        if (props.itemList[correctItems] === value) {
            props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
            setDisabledItems(prevList => [...prevList,index]);
            setCorrectItems(prevCount => prevCount + 1 );
        } 
        else {
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
            <div>
                <h2>Select in the right order</h2>
            </div>
            <div className={classes.ItemsList}>
            {props.totalItems.map((value, index) => {
                if(disabledItems.indexOf(index) === -1) {
                    switch (props.mode) {
                        case NUMBERS_MODE:
                            return <div 
                                className={classes.Numbers + ' ' + ((index % 2) ? classes.EvenItem : classes.OddItem ) + ' ' + assignStyle(value) }
                                onClick={() => itemClickHandler(index, value)}
                                key={index} 
                                >{value}</div>
                        case FLAGS_MODE:
                            return <Flag 
                                className={classes.Flags + ' ' + assignStyle(value)}
                                clickHandler={() => itemClickHandler(index, value)}
                                key={index} 
                                num={value} />
                        case SHAPES_MODE:
                            return <Shape 
                                className={classes.Shapes + ' ' + assignStyle(value)}
                                clickHandler={() => itemClickHandler(index, value)}
                                key={index} 
                                num={value} />
                        case CARDS_MODE:
                            return <PlayingCard 
                                className={classes.PlayingCard + ' ' + assignStyle(value)}
                                clickHandler={() => itemClickHandler(index, value)}
                                key={index} 
                                num={value} />
                        default: // EMOJIS_MODE
                            return <Emoji 
                                className={classes.Emojis + ' ' + assignStyle(value)}
                                clickHandler={() => itemClickHandler(index, value)}
                                key={index} 
                                num={value} />
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerScreen);