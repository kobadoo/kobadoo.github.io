import React from 'react';
import { connect } from 'react-redux';
import classes from './SlideShow.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';
import {NUMBERS_MODE} from '../../../../store/constants'

const slideShow = (props) => {

    switch (props.mode) {
        case NUMBERS_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <div className={classes.SlideShowFont}>{props.emoji}</div>
                </div>);
        default: // EMOJIS_MODE
            return (
                <div className={classes.SlideShowScreen}>
                    <Emoji className={classes.SlideShowFont} num={props.emoji} />
                </div>);
    }
}

const mapStateToProps = state => {
    return {
        mode: state.mode
    };
};

export default connect(mapStateToProps,)(slideShow);