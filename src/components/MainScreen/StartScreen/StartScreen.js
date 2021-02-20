import React from 'react';
import classes from './StartScreen.module.css';
import Adsense from '../../../utils/Adsense';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const style = {
    marginTop: '15px',
    marginBottom: '20px'
};

const startScreen = (props) => (
    <div className={classes.StartScreen}>
         <div className={classes.HeaderText}>
             <strong>Kobadoo</strong> is a free memory game that trains your brain using funny emojis.
         </div>
        <div>
            <button 
                className={classes.StartButton} 
                onClick={props.startGame}>Start Game</button>
        </div>

        <div className={classes.BenefitsText}>
            <h4>How does it work?</h4>
            <p>Click on <i>Start Game</i> and <strong>memorize the emojis</strong> that are displayed.
               Then <strong>select them in the right order</strong> to pass to the next level. It gets more challenging over time! 
               <strong> 100% free</strong>, no download or sign up required. <strong>Play on mobile</strong> for the best experience.</p>
        </div>

        <div className={classes.BenefitsText}>
            <img className={classes.BrainImage} src='/images/brain.png' />
            <h4>Why is Kobadoo good for your mind?</h4>
            <p>Playing memory games help sharpen certain brain functions that tend to wane with age, such as <b>attention</b> to detail, <b>concentration</b>, <b>reaction time</b>, <b>decision making</b>, and <b>short-term memory</b>. <i>Kobadoo</i> has been created in <strong>cooperation with neuropsychologists</strong> in Norway.</p>
        </div>

        { /*
        <Adsense 
            client="ca-pub-xxxxxxxxxx" 
            slot="xxxxxxxxxx" 
            format="auto" 
            wrapperDivStyle={style}
        /> */ }

        <div className={classes.Footer}>
            <div className={classes.FooterItem}><a href="https://twitter.com/kobadooApp" target="_new"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>
            <div className={classes.FooterItem}><a href="https://facebook.com/kobadooApp" target="_new"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
            <div className={classes.FooterItem}><a href="https://instagram.com/kobadoo" target="_new"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
            <div className={classes.FooterItem}><a href="terms.html" target="_new">Terms and Conditions</a></div>
            <div className={classes.FooterItem}><a href="privacy.html" target="_new">Privacy Policy</a></div>
            <div className={classes.FooterItem}><a href="credits.html" target="_new">Credits</a></div>
        </div>

    </div>
);

export default startScreen;