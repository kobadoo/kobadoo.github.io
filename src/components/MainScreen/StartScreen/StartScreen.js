import React from 'react';
import classes from './StartScreen.module.css';

const startScreen = (props) => (
    <div className={classes.StartScreen}>
        <div>
            <h2>Memorize these emojis</h2>
        </div>
        <div>
            <button 
                className={classes.StartButton} 
                onClick={props.startGame}>Start Game</button>
        </div>
    </div>
);

export default startScreen;