import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import { abortGame } from '../../store/actions/actions';
import { MAX_LEVEL } from '../MainScreen/PlayScreen/PlayScreen';
import { getModeName } from '../MainScreen/EndScreen/EndScreen';

const APP_NAME = 'KOBADOO';
const MOTTO = 'memory game';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo} onClick={props.onAbortGame}><Link to="/">{APP_NAME}</Link></div>
        { (props.hasStarted || props.lvl > 1) ?
            <React.Fragment>
                <div className={classes.Mode}>{getModeName(props.mode)}</div> 
                <div className={classes.GameStats}>
                    <div className={classes.ToolbarItem}>Level: <strong>{props.lvl} / {MAX_LEVEL}</strong></div>
                    <div className={classes.ToolbarItem}>Score: <strong>{props.scr}</strong></div>
                </div>
            </React.Fragment>
        : <div className={classes.SubLogo}>{MOTTO}</div> }
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