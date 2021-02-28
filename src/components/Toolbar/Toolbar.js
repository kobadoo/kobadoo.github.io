import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import * as actionTypes from '../../store/actions';

const APP_NAME = 'KOBADOO';

const toolbar = (props) => (
        <div className={classes.Toolbar}>
            <div className={classes.Logo} onClick={props.onAbortGame}><Link to="/">{APP_NAME}</Link></div>
            <div className={classes.ToolbarItem}>Level: <strong>{props.lvl}</strong></div>
            <div className={classes.ToolbarItem}>Score: <strong>{props.scr}</strong></div>
        </div>
);

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAbortGame: () => dispatch({type: actionTypes.ABORT_GAME})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);