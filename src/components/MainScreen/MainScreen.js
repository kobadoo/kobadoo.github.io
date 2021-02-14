import React from 'react';
import classes from './MainScreen.module.css';

const mainScreen = (props) => (
        <div className={classes.MainScreen}>
            <div>
                <h2>Memorize these emojis</h2>
            </div>
            <div>
                <button className={classes.StartButton}>Start Game</button>
            </div>
        </div>
);

export default mainScreen;