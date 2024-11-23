import React from 'react';
import { connect } from 'react-redux';
import classes from './CardSelectionScreen.module.css';
import { PlayingCard } from '../../../utils/Modes/Card';
import {TRANSITION} from '../../../../store/constants'
import { changeScreen } from '../../../../store/actions/actions';

const CardSelectionScreen = (props) => {

    return (
        <div className={classes.CardSelectionScreen}>
            <div>
                <h2>Ask a question & choose a card</h2>
            </div>
            <div className={classes.ItemsList}>
            {props.itemList.map((value, index) => {
                return <PlayingCard 
                    className={classes.PlayingCard}
                    clickHandler={() => props.onChangeScreen(TRANSITION)}
                    key={index} 
                    num={value} />
            })}
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeScreen: (newScreen) => {dispatch(changeScreen(newScreen))}
    };
};

export default connect(null, mapDispatchToProps)(CardSelectionScreen);