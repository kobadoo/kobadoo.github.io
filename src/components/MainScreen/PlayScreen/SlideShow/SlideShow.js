import React from 'react';
import classes from './SlideShow.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';

const slideShow = (props) => (
    <div className={classes.SlideShowScreen}>
        <Emoji className={classes.SlideShowFont} num={props.emoji} />
    </div>
);

export default slideShow;