import React from 'react';
import classes from './EndScreen.module.css';

const endScreen = (props) => (
    <div className={classes.EndScreen}>
        <div>
            <h2>Game Over!</h2>
            <h3>Level: <strong>{props.level}</strong></h3>
            <h3>Score: <strong>{props.score}</strong></h3>
        </div>
        <div>
            <button 
                className={classes.RestartButton} 
                onClick={props.restartGame}>Restart Game</button>
        </div>
    </div>
);

export default endScreen;