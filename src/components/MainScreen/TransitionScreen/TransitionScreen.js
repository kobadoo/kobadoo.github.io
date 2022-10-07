import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel, togglePause } from '../../../store/actions/actions';
import { MAX_LEVEL } from '../PlayScreen/PlayScreen';

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

const STATS_MAP = [
    99, // level 2
    94, // level 3
    91, // level 4
    84, // level 5
    79, // level 6
    73, // level 7
    65, // level 8
    59, // level 9
    52, // level 10
    42, // level 11
    35, // level 12
    28, // level 13
    17, // level 14
    11, // level 15
    7, // level 16
    2, // level 17
    0.9, // level 18
    0.4, // level 19
    0.04, // level 20
    0.01, // level 21
    0.006, // level 22
    0.002, // level 23
    0.0005, // level 24
    0.0002, // level 25
    0.00014, // level 26
    0.00008, // level 27
    0.00004, // level 28
    0.00003, // level 29
    0.00002, // level 30
    0.00001 // level 31
]


const TransitionScreen = (props) => {

    useEffect(() => {

        if (props.showAds && props.paused) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x250_4');
                window.aipDisplayTag.display('kobadoo-com_160x600_1'); 
                window.aipDisplayTag.display('kobadoo-com_160x600_2');
                window.aipDisplayTag.display('kobadoo-com_728x90_2');
            })
        }

        const timeout = setInterval(() => {
            if(!props.paused) {
                props.onStartLevel();
            }
        }, INTERVAL_BETWEEN_LEVELS);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, [props.paused, props.showAds, props]);

    return (
        <div className={classes.TransitionScreen}>

            {(props.showAds && props.paused) ? 
                <React.Fragment>
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} />
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                </React.Fragment>
                : null
            }

            <div className={classes.LevelText}><h2>Level {props.lvl - 1} of {MAX_LEVEL} completed!</h2></div>
            { props.lvl < 4 ? <div className={classes.Stats}><strong>{STATS_MAP[props.lvl - 2]}%</strong> players reach this level <span>{String.fromCodePoint(OK)}</span></div> :
                    props.lvl >=4 && props.lvl < 7 ?<div className={classes.Stats}>Good job! <strong>{STATS_MAP[props.lvl - 2]}%</strong> players get here <span>{String.fromCodePoint(MUSCLE)}</span></div> :
                    props.lvl >=7 && props.lvl < 10 ?<div className={classes.Stats}>Well done! <strong>{STATS_MAP[props.lvl - 2]}%</strong> players reach this level <span>{String.fromCodePoint(NICE)}</span></div> :
                    props.lvl >=10 && props.lvl < 13 ?<div className={classes.Stats}>Amazing! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> players get here <span>{String.fromCodePoint(BALLOON)}</span></div> :
                    props.lvl >=13 && props.lvl < 16 ?<div className={classes.Stats}>Bravo! Just <strong>{STATS_MAP[props.lvl - 2]}%</strong> players reach this level <span>{String.fromCodePoint(APPLAUSE)}</span></div> :
                    props.lvl >=16 && props.lvl < 19 ?<div className={classes.Stats}>Excellent! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> players get here <span>{String.fromCodePoint(CONFETTI)}</span></div> :
                    props.lvl >=19 && props.lvl < 22 ?<div className={classes.Stats}>Incredible! Just <strong>{STATS_MAP[props.lvl - 2]}%</strong> players get here <span>{String.fromCodePoint(CELEBRATION)}</span></div> :
                    props.lvl >=22 && props.lvl < 25 ?<div className={classes.Stats}>Genious! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> players managed this! <span>{String.fromCodePoint(CHAMPAGNE)}</span></div> :
                    props.lvl >=25 && props.lvl < 28 ?<div className={classes.Stats}>OMG! Just <strong>{STATS_MAP[props.lvl - 2]}%</strong> players get here <span>{String.fromCodePoint(MEDAL)}</span></div> :  
                    props.lvl >=28 && props.lvl < 32 ?<div className={classes.Stats}>Boom! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> players reach this level<span>{String.fromCodePoint(CUP)}</span></div> :                
                    null }

            <div>
                <button 
                    className={props.paused ? classes.ResumeButton : classes.PauseButton} 
                    onClick={props.onTogglePause}>{props.paused ? 'Resume' : 'Pause'}
                </button>
            </div>

            {props.showAds && props.paused ? <div id='kobadoo-com_300x250_4' className={classes.Ad300x250} /> : null }
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        paused: state.isPaused,
        showAds: state.showAds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel()),
        onTogglePause: () => dispatch(togglePause())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionScreen);