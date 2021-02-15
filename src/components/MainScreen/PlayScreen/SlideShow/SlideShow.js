import React from 'react';
import classes from '../PlayScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';

const slideShow = (props) => (
    <div className={classes.PlayScreen}>
        <Emoji className={classes.SlideShow} num={props.emoji} />
    </div>
);

export default slideShow;