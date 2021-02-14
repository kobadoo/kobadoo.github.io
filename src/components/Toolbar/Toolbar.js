import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
        <div className={classes.Toolbar}>
            <div className={classes.Logo}><a href='/'>{props.appName}</a></div>
            <div className={classes.ToolbarItem}>Level: <strong>{props.level}</strong></div>
            <div className={classes.ToolbarItem}>Score: <strong>{props.score}</strong></div>
        </div>
);

export default toolbar;