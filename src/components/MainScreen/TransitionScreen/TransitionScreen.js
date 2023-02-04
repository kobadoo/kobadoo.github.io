import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel, togglePause } from '../../../store/actions/actions';
import { MAX_LEVEL } from '../PlayScreen/PlayScreen';
import { KIDS_MODE } from '../../../store/constants';
import statsSummary from '../../../utils/statsSummary.json';

const INTERVAL_BETWEEN_LEVELS = 3000;
const CUP = 0X1F3C6;
const APPLAUSE = 0X1F44F;
const CHAMPAGNE = 0X1F37E;
const CONFETTI = 0X1F389;
const CELEBRATION = 0X1F38A;
const BALLOON = 0X1F388;
const MEDAL = 0X1F3C5;
const MUSCLE = 0X1F4AA;
const NICE = 0X1F44C;
const OK = 0X1F44D;

const TransitionScreen = (props) => {

    useEffect(() => {
        const timeout = setInterval(() => {
            if(!props.paused) {
                props.onStartLevel();
            }
        }, INTERVAL_BETWEEN_LEVELS);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, [props.paused, props]);

    return (
        <div className={classes.TransitionScreen}>

            <div className={classes.LevelText}><h2>Level {props.lvl - 1} of {MAX_LEVEL} completed!</h2></div>
                { props.mode === KIDS_MODE ? null : props.lvl < 4 ? <div className={classes.Stats}><strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players achieve this <span>{String.fromCodePoint(OK)}</span></div> :
                    props.lvl >=4 && props.lvl < 7 ?<div className={classes.Stats}>Good job! <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players get here <span>{String.fromCodePoint(MUSCLE)}</span></div> :
                    props.lvl >=7 && props.lvl < 10 ?<div className={classes.Stats}>Well done! <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players achieve this <span>{String.fromCodePoint(NICE)}</span></div> :
                    props.lvl >=10 && props.lvl < 13 ?<div className={classes.Stats}>Amazing! Only <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players get here <span>{String.fromCodePoint(BALLOON)}</span></div> :
                    props.lvl >=13 && props.lvl < 16 ?<div className={classes.Stats}>Bravo! Just <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players achieve this <span>{String.fromCodePoint(APPLAUSE)}</span></div> :
                    props.lvl >=16 && props.lvl < 19 ?<div className={classes.Stats}>Excellent! Only <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players get here <span>{String.fromCodePoint(CONFETTI)}</span></div> :
                    props.lvl >=19 && props.lvl < 22 ?<div className={classes.Stats}>Incredible! Just <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players get here <span>{String.fromCodePoint(CELEBRATION)}</span></div> :
                    props.lvl >=22 && props.lvl < 25 ?<div className={classes.Stats}>Genious! Only <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players achieve this <span>{String.fromCodePoint(CHAMPAGNE)}</span></div> :
                    props.lvl >=25 && props.lvl < 28 ?<div className={classes.Stats}>OMG! Just <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players get here <span>{String.fromCodePoint(MEDAL)}</span></div> :  
                    props.lvl >=28 && props.lvl < 32 ?<div className={classes.Stats}>Boom! Only <strong>{statsSummary[props.mode].percentileByLevel[props.lvl-1]}%</strong> players achieve this<span>{String.fromCodePoint(CUP)}</span></div> :                
                    null }

            <div>
                <button 
                    className={props.paused ? classes.ResumeButton : classes.PauseButton} 
                    onClick={props.onTogglePause}>{props.paused ? 'Resume' : 'Pause'}
                </button>
            </div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        paused: state.isPaused,
        mode: state.mode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel()),
        onTogglePause: () => dispatch(togglePause())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionScreen);