import React from 'react';
import { connect } from 'react-redux';
import classes from './SlideShow.module.css';
import Emoji from '../../../../utils/Modes/Emoji';
import {Flag, Label} from '../../../../utils/Modes/Flag';
import {Shape, ShapeName} from '../../../../utils/Modes/Shapes';
import {PokerCard, PokerCardLabel} from '../../../../utils/Modes/PokerCard';
import {NUMBERS_MODE, FLAGS_MODE, ARITHMETIC_MODE, SHAPES_MODE, POKER_MODE} from '../../../../store/constants'

const slideShow = (props) => {

    switch (props.mode) {
        case NUMBERS_MODE:
        case ARITHMETIC_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <div className={classes.SlideShowFont}>{props.item}</div>
                </div>);
        case FLAGS_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <Flag className={classes.SlideShowFont+ ' ' + classes.Flags} num={props.item} />
                    <Label className={classes.FlagLabel} num={props.item} />
                </div>);
        case SHAPES_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <Shape className={classes.SlideShowFont+ ' ' + classes.Shapes} num={props.item} />
                    <ShapeName className={classes.ShapeLabel} num={props.item} />
                </div>);
        case POKER_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <PokerCard className={classes.SlideShowFont+ ' ' + classes.PokerCard} num={props.item} />
                    <PokerCardLabel className={classes.PokerCardLabel} num={props.item} />
                </div>);
        default: // EMOJIS_MODE
            return (
                <div className={classes.SlideShowScreen}>
                    <Emoji className={classes.SlideShowFont} num={props.item} />
                </div>);
    }
}

const mapStateToProps = state => {
    return {
        mode: state.mode
    };
};

export default connect(mapStateToProps,)(slideShow);