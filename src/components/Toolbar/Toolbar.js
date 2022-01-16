import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import { abortGame } from '../../store/actions/actions';

const APP_NAME = 'KOBADOO';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo} onClick={props.onAbortGame}><Link to={props.iframe ? "/iframe/" + props.mode : "/"}>{APP_NAME}</Link></div>
        <div className={classes.ToolbarItem}>Level: <strong>{props.lvl}</strong></div>
        <div className={classes.ToolbarItem}>Score: <strong>{props.scr}</strong></div>
    </div>
);

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score,
        iframe: state.isOnIframe,
        mode: state.mode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAbortGame: () => dispatch(abortGame())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);