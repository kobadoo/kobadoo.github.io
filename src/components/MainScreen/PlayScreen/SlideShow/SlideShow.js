import React from 'react';
import { connect } from 'react-redux';
import classes from './SlideShow.module.css';
import Emoji from '../../../../utils/Modes/Emoji';
import {Flag, Label} from '../../../../utils/Modes/Flag';
import {Shape, ShapeName} from '../../../../utils/Modes/Shapes';
import {PlayingCard, PlayingCardLabel} from '../../../../utils/Modes/Card';
import {NUMBERS_MODE, FLAGS_MODE, ARITHMETIC_MODE, SHAPES_MODE, CARDS_MODE, KIDS_MODE} from '../../../../store/constants'
import { KidsAudio, KidsEmoji, KidsLabel, playAudioByItemNumber } from '../../../../utils/Modes/Kids';
import Audio from '../../../../images/audio.png';

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
        case CARDS_MODE:
            return (
                <div className={classes.SlideShowScreen}>
                    <PlayingCard className={classes.SlideShowFont+ ' ' + classes.PlayingCard} num={props.item} />
                    <PlayingCardLabel className={classes.PlayingCardLabel} num={props.item} />
                </div>);
        case KIDS_MODE:                 
            return (
                <div className={classes.SlideShowScreen}>
                    <KidsEmoji className={classes.SlideShowFont} num={props.item} />
                    <KidsAudio className={classes.SlideShowFont} num={props.item} />
                    <KidsLabel className={classes.KidsLabel} num={props.item} />
                    <img src={Audio} onClick={() => playAudioByItemNumber(props.item)} width="50px" alt="Play audio" />
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