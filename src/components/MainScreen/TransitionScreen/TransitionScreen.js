import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel, togglePause } from '../../../store/actions/actions';

const INTERVAL_BETWEEN_LEVELS = 3000;


const TransitionScreen = (props) => {

    useEffect(() => {

        if (props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x250_1');
                window.aipDisplayTag.display('kobadoo-com_300x50'); 
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
    }, [props.paused, props.showAds]);

    return (
        <div className={classes.TransitionScreen}>
            {(props.showAds) ? 
                <React.Fragment>
                    <div id='kobadoo-com_300x50' className={classes.Ad300x50} />
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} />
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                </React.Fragment>
                : null}
            <div><h2>Level {props.lvl - 1} completed!</h2></div>
            <div>
                <button 
                    className={classes.PauseButton} 
                    onClick={props.onTogglePause}>{props.paused ? 'Resume' : 'Pause'}
                </button>
            </div>
            {props.showAds ? <div id='kobadoo-com_300x250_1' className={classes.Ad300x250} /> : null }
            
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