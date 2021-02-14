import React from 'react';
import classes from '../PlayScreen.module.css';

const slideShow = (props) => (
    <div className={classes.PlayScreen}>
        <div className={classes.SlideShow}>{props.emoji}</div>
    </div>
);

export default slideShow;