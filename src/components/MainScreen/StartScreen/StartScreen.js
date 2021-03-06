import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Adsense from '../../../utils/Adsense';
import Footer from '../../Footer/Footer';
import { startLevel } from '../../../store/actions/actions';
import BrainImg from '../../../images/brain.png';
import MonkeyImg from '../../../images/monkey.png';
import BulbImg from '../../../images/bulb.png';
import TrainImg from '../../../images/train.png';

const style = {
    marginTop: '15px',
    marginBottom: '20px'
};

const StartScreen = (props) => {
    
    useEffect(() => {
        const script = document.createElement('script');  
        script.src = "https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=flying&tracking=1&thirdparty=1&noGeoIp=1&hideDetailsBtn=1";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);
    
    return (
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
                <img className={classes.StartImage} src={BulbImg} />
                <h3>What is the <i>working memory</i>?</h3>
                <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>. So <strong>have fun</strong> while you also train your working memory and attention!</p>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={TrainImg} />
                <h3>Why should you train your <i>working memory</i>?</h3>
                <p>Some programs to train the working memory have shown improvements in everyday functioning, including your <strong>concentration</strong>. It can be especially beneficial to some clinical groups like people with ADHD, that suffer impaired working memory and inattentiveness. One example is the possibility to improve the <strong>school performance</strong> of children with ADHD.</p>
                <p>Some adults have also improved their brain functions through this kind of exercises. <strong>Age-related decline</strong> can be improved by training working memory, and it can also help older adults perform everyday tasks <strong>more efficiently</strong>. Finally, some studies suggest that training your working memory can <strong>improve your mood</strong> by releasing dopamine in the brain.</p>
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
};

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(null, mapDispatchToProps)(StartScreen);