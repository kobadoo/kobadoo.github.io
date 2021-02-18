import React from 'react';
import classes from './StartScreen.module.css';
import Adsense from '../../../utils/Adsense';

const style = {
    marginTop: '15px',
    marginBottom: '20px'
};

const startScreen = (props) => (
    <div className={classes.StartScreen}>
         <div className={classes.HeaderText}><strong>Kobadoo</strong> is a free memory game that trains your brain using funny emojis.</div>

        <div>
            <button 
                className={classes.StartButton} 
                onClick={props.startGame}>Start Game</button>
        </div>

        <div className={classes.BenefitsText}>
            <img className={classes.BrainImage} src='/images/brain.png' />
            <h4>Why is Kobadoo good for your mind?</h4>
            <p>Playing memory games help sharpen certain brain functions that tend to wane with age, such as <b>attention</b> to detail, <b>concentration</b>, <b>reaction time</b>, <b>decision making</b>, and <b>short-term memory</b>.</p>
        </div>

        { /*
        <Adsense 
            client="ca-pub-xxxxxxxxxx" 
            slot="xxxxxxxxxx" 
            format="auto" 
            wrapperDivStyle={style}
        /> */ }

        <div className={classes.Footer}>
            <div className={classes.FooterItem}><a href="terms.html" target="_new">Terms and Conditions</a></div>
            <div className={classes.FooterItem}><a href="privacy.html" target="_new">Privacy Policy</a></div>
            <div className={classes.FooterItem}><a href="credits.html" target="_new">Credits</a></div>
        </div>

    </div>
);

export default startScreen;