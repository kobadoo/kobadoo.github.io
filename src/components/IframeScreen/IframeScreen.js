import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './IframeScreen.module.css';
import { setIframe, startLevel } from '../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IframeScreen = (props) => {

    useEffect(() => {
        props.onSetIframe();
        const timeout = setInterval(() => {
            props.onStartLevel();
            props.history.push('/')
        }, INTERVAL_BEFORE_LEVEL_1);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, [])

    return (
        <div className={classes.IframeScreen}>
            <h1>Memorize these emojis</h1>
            <h2>Get ready!</h2>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSetIframe: () => dispatch(setIframe()),
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(null, mapDispatchToProps)(IframeScreen);