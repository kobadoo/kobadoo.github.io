import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Footer from '../../Footer/Footer';
import { startLevel } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';
import TrainImg from '../../../images/train.png';
import BulbImg from '../../../images/bulb.png';
import GooglePlayImg from '../../../images/google-play-badge.png';

const StartScreen = (props) => {

    useEffect(() => {
        if (props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x100'); 
                window.aipDisplayTag.display('kobadoo-com_300x250_2'); 
                window.aipDisplayTag.display('kobadoo-com_160x600_1'); 
                window.aipDisplayTag.display('kobadoo-com_160x600_2');
                window.aipDisplayTag.display('kobadoo-com_728x90_1');
                window.aipDisplayTag.display('kobadoo-com_728x90_2');
                window.aipDisplayTag.display('kobadoo-com_300x250');
            });
        }
    }, [props.showAds]);
    
    return (
        <div className={classes.StartScreen}>

            { props.showAds ? (
                <React.Fragment>
                    <div id='kobadoo-com_300x100' className={classes.Ad300x100} />
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                    <div id='kobadoo-com_728x90_1' className={classes.Ad728x90} />
                </React.Fragment>
                ) : null
            }

            <div className={classes.HeaderText}>
                <strong>Kobadoo</strong> is a free memory game that trains your brain using funny emojis.
            </div>
            <div className={classes.ButtonsDiv}>
                <button 
                    className={classes.StartButton} 
                    onClick={props.onStartLevel}>Start Game</button>
                <a href="https://play.google.com/store/apps/details?id=com.kobadoo" target="_new"><img className={classes.GooglePlayButton} src={GooglePlayImg} /></a>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={MonkeyImg} />
                <h3>How does it work?</h3>
                <p>Click on <i>Start Game</i> and <strong>memorize the emojis</strong> that are displayed.
                Then <strong>select them in the right order</strong> to be able to reach the next level. It gets more challenging over time! 
                <strong> 100% free</strong>, no download or sign up required. <strong>Play on mobile</strong> for the best experience.</p>
            </div>

            <div className={classes.BenefitsText}>
                { props.showAds ? <div id='kobadoo-com_300x250' className={classes.Ad300x250} /> : <img className={classes.StartImage} src={BulbImg} /> }
                <h3>What is <i>working memory</i>?</h3>
                <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>.</p>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={TrainImg} />
                <h3>Why should you train your <i>working memory</i>?</h3>
                <p>Some programs to train the working memory have shown improvements in everyday functioning, including your <strong>concentration</strong>. It can be especially beneficial to some clinical groups like people with ADHD [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0890856709614271" target="_new">1</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1080/15374416.2010.517162" target="_new">2</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1076/jcen.24.6.781.8395" target="_new">3</a>], that suffer impaired working memory and inattentiveness. One example is the possibility to improve the <strong>school performance</strong> of children with ADHD.
                   Some adults have also improved their brain functions through this kind of exercises [<a href="https://psycnet.apa.org/record/2011-13119-001" target="_new">4</a>] [<a href="https://psycnet.apa.org/record/2017-10607-007" target="_new">5</a>]. Finally, some studies [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0149763413000158" target="_new">6</a>] [<a href="https://www.mitpressjournals.org/doi/full/10.1162/jocn_a_00478" target="_new">7</a>] suggest that training your working memory can <strong>improve your mood</strong> by releasing dopamine in the brain.</p>
            </div>
            { props.showAds ? (
                <React.Fragment>
                    <div id='kobadoo-com_300x250_2' className={classes.Ad300x250_2} />
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} />
                </React.Fragment>
                ) : null
            }
            <Footer />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        showAds: state.showAds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);