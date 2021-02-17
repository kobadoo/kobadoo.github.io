import React from 'react';
import classes from './StartScreen.module.css';
import Adsense from '../../../utils/Adsense';

const style = {
    marginTop: '15px',
    marginBottom: '20px'
};

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

        <Adsense 
            client="ca-pub-xxxxxxxxxx" 
            slot="xxxxxxxxxx" 
            format="auto" 
            wrapperDivStyle={style}
        />

    </div>
);

export default startScreen;