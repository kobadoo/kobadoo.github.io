import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';

const APP_NAME = 'KOBADOO';

const toolbar = (props) => (
        <div className={classes.Toolbar}>
            <div className={classes.Logo}><Link to="/">{APP_NAME}</Link></div>
            <div className={classes.ToolbarItem}>Level: <strong>{props.level}</strong></div>
            <div className={classes.ToolbarItem}>Score: <strong>{props.score}</strong></div>
        </div>
);

export default toolbar;