import React from 'react';
import { connect } from 'react-redux';
import classes from './SlideShow.module.css';
import Emoji from '../../../../utils/Modes/Emoji';
import {Flag, Label} from '../../../../utils/Modes/Flag';
import {Shape, ShapeName} from '../../../../utils/Modes/Shapes';
import {NUMBERS_MODE, FLAGS_MODE, SHAPES_MODE} from '../../../../store/constants'

const slideShow = (props) => {

    switch (props.mode) {
        case NUMBERS_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <div className={classes.SlideShowFont}>{props.emoji}</div>
                </div>);
        case FLAGS_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <Flag className={classes.SlideShowFont+ ' ' + classes.Flags} num={props.emoji} />
                    <Label className={classes.FlagLabel} num={props.emoji} />
                </div>);
        case SHAPES_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <Shape className={classes.SlideShowFont+ ' ' + classes.Shapes} num={props.emoji} />
                    <ShapeName className={classes.ShapeLabel} num={props.emoji} />
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