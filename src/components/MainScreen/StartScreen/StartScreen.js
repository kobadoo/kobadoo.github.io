import React from 'react';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Adsense from '../../../utils/Adsense';
import Footer from '../../Footer/Footer';
import { startLevel } from '../../../store/actions/actions';
import BrainImg from '../../../images/brain.png';
import MonkeyImg from '../../../images/monkey.png';
import TrainImg from '../../../images/train.png';

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
                onClick={props.onStartLevel}>Start Game</button>
        </div>

        <div className={classes.BenefitsText}>
            <img className={classes.StartImage} src={MonkeyImg} />
            <h3>How does it work?</h3>
            <p>Click on <i>Start Game</i> and <strong>memorize the emojis</strong> that are displayed.
               Then <strong>select them in the right order</strong> to be able to reach the next level. It gets more challenging over time! 
               <strong> 100% free</strong>, no download or sign up required. <strong>Play on mobile</strong> for the best experience.</p>
        </div>

        <div className={classes.BenefitsText}>
            <img className={classes.StartImage} src={BrainImg} />
            <h3>Why is Kobadoo good for your mind?</h3>
            <p>Playing memory games help sharpen certain brain functions that tend to wane with age, such as <strong>attention</strong> to detail, <strong>concentration</strong>, <strong>reaction time</strong>, <strong>decision making</strong>, and <strong>working memory</strong>. <i>Kobadoo</i> has been created in cooperation with a specialist in <strong>clinical neuropsychology</strong>.</p>
        </div>

        <div className={classes.BenefitsText}>
            <img className={classes.StartImage} src={TrainImg} />
            <h3>What is the <i>working memory</i> and why should you train it?</h3>
            <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>. So <strong>have fun</strong> while you also train your working memory and attention!</p>
        </div>

        { /*
        <Adsense 
            client="ca-pub-xxxxxxxxxx" 
            slot="xxxxxxxxxx" 
            format="auto" 
            wrapperDivStyle={style}
        /> */ }

        <Footer />

    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(null, mapDispatchToProps)(startScreen);