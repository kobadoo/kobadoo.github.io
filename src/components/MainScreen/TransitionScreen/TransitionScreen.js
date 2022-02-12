import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel, togglePause } from '../../../store/actions/actions';

const INTERVAL_BETWEEN_LEVELS = 4000;
const STATS_MAP = [
    99.98, // level 2
    97.11, // level 3
    91.84, // level 4
    88.16, // level 5
    84.40, // level 6
    76.79, // level 7
    70.42, // level 8
    64.12, // level 9
    54.16, // level 10
    48.91, // level 11
    42.34, // level 12
    30.23, // level 13
    25.91, // level 14
    17.50, // level 15
    9.81, // level 16
    5.44, // level 17
    3.09, // level 18
    1.15, // level 19
    0.76, // level 20
    0.14, // level 21
    0.02, // level 22
    0.009, // level 23
    0.003, // level 24
    0.0006, // level 25
    0.0001, // level 26
    0, // level 27
    0, // level 28
    0, // level 29
    0, // level 30
    0, // level 31
    0, // level 32
]


const TransitionScreen = (props) => {

    useEffect(() => {

        if (props.showAds && !props.iframe) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x250_4');
                window.aipDisplayTag.display('kobadoo-com_300x100'); 
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
    }, [props.paused, props.showAds, props.iframe]);

    return (
        <div className={classes.TransitionScreen}>
            {(props.showAds && !props.iframe) ? 
                <React.Fragment>
                    <center><div id='kobadoo-com_300x100' className={classes.Ad300x100} /></center>
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} />
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                </React.Fragment>
                : null}
            <div><h2>Level {props.lvl - 1} completed!</h2></div>
            { props.lvl < 4 ? <div className={classes.Stats}><strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=4 && props.lvl < 7 ?<div className={classes.Stats}>Good job! <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=7 && props.lvl < 10 ?<div className={classes.Stats}>Well done! <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=10 && props.lvl < 13 ?<div className={classes.Stats}>Amazing! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=13 && props.lvl < 16 ?<div className={classes.Stats}>You are doing great! Just <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=16 && props.lvl < 19 ?<div className={classes.Stats}>Excellent! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=19 && props.lvl < 22 ?<div className={classes.Stats}>You have extraordinary memory! Just <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=22 && props.lvl < 25 ?<div className={classes.Stats}>You are a genious! Only <strong>{STATS_MAP[props.lvl - 2]}%</strong> of the players reach this level</div> :
                    props.lvl >=25 && props.lvl < 27 ?<div className={classes.Stats}>Only <strong>another</strong> player has reached this level!</div> :    
                    props.lvl >=27 && props.lvl < 32 ?<div className={classes.Stats}>You have set a <strong>new all-time record</strong> in Kobadoo. Keep it up!</div> :                
                    null }
            <div>
                <button 
                    className={classes.PauseButton} 
                    onClick={props.onTogglePause}>{props.paused ? 'Resume' : 'Pause'}
                </button>
            </div>
            {(props.showAds && !props.iframe) ? <div id='kobadoo-com_300x250_4' className={classes.Ad300x250} /> : null }
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        paused: state.isPaused,
        showAds: state.showAds,
        iframe: state.isOnIframe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel()),
        onTogglePause: () => dispatch(togglePause())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionScreen);