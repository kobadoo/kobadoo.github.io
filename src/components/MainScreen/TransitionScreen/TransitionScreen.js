import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel } from '../../../store/actions/actions';

const INTERVAL_BETWEEN_LEVELS = 2000;


const TransitionScreen = (props) => {

    useEffect(() => {
        const timeout = setInterval(() => {
            props.onStartLevel();
        }, INTERVAL_BETWEEN_LEVELS);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, [])

    return (
        <div className={classes.TransitionScreen}>
            <h2>Level {props.lvl - 1} completed!</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionScreen);