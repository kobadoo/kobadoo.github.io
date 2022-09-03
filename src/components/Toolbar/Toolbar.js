import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import { abortGame } from '../../store/actions/actions';
import { MAX_LEVEL } from '../MainScreen/PlayScreen/PlayScreen';

const APP_NAME = 'KOBADOO';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo} onClick={props.onAbortGame}><Link to="/">{APP_NAME}</Link></div>
        <div className={classes.SubLogo}>memory game</div>
        { (props.hasStarted || props.lvl > 1) ? 
            <div className={classes.GameStats}>
                <div className={classes.ToolbarItem}>Level: <strong>{props.lvl} / {MAX_LEVEL}</strong></div>
                <div className={classes.ToolbarItem}>Score: <strong>{props.scr}</strong></div>
            </div>
        : null }
    </div>
);

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score,
        mode: state.mode,
        hasStarted: state.hasLevelStarted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAbortGame: () => dispatch(abortGame())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);