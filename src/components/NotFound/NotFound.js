import React from 'react';
import MonkeyImg from '../../images/monkey.png';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => (
    <div className={classes.NotFound}>
        <img className={classes.EndImage} src={MonkeyImg} alt="" />
        <h1>Ooops! This page doesn't exist</h1>  
        <h2>Go back to <Link to="/">Kobadoo</Link></h2>
    </div>
);

export default NotFound;