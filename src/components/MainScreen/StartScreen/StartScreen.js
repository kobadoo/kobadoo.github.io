import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import {Adsense} from '@ctrl/react-adsense';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Footer from '../../Footer/Footer';
import { changeMode, showIntro } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';
import TrainImg from '../../../images/train.png';
import BulbImg from '../../../images/bulb.png';
import GooglePlayImg from '../../../images/google-play-badge.png';



const StartScreen = (props) => {

    const handleMode = (_, newMode,
    ) => {
        props.onChangeMode(newMode);
    };

    return (
        <div className={classes.StartScreen}>

            <h3 className={classes.HeaderText}>
                <strong>Kobadoo</strong> is a free game that trains your brain by memorizing emojis, flags, numbers or geometric shapes.
            </h3>

            <p className={classes.SelectModeText}>Select a mode</p>
            <ToggleButtonGroup color='primary' onChange={handleMode} exclusive>
                <ToggleButton selected={props.mode === 0} value={0}>Emojis</ToggleButton>
                <ToggleButton selected={props.mode === 1} value={1}>Flags</ToggleButton>
                <ToggleButton selected={props.mode === 2} value={2}>Numbers</ToggleButton>
                <ToggleButton selected={props.mode === 3} value={3}>Shapes</ToggleButton>
            </ToggleButtonGroup>

            <div className={classes.ButtonsDiv}>
                <button 
                    className={classes.StartButton} 
                    onClick={props.onStartGame}>Start Game</button>
                <a href="https://play.google.com/store/apps/details?id=com.kobadoo" target="_new"><img className={classes.GooglePlayButton} src={GooglePlayImg} /></a>
            </div>

            <Adsense client="ca-pub-2852428416753185" slot="6414612377"/>
            
            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={MonkeyImg} />
                <h3>How does it work?</h3>
                <p>Select a mode (emojis, flags, numbers or geometric shapes), click on <i>Start Game</i> and <strong>memorize</strong> the items that are displayed.
                Then <strong>select them in the right order</strong> to be able to reach the next level. It gets more challenging over time! 
                <strong> 100% free</strong>, no download or sign up required. <strong>Play on mobile</strong> for the best experience.</p>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={BulbImg} />
                <h3>What is <i>working memory</i>?</h3>
                <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>. You can learn more about working memory on <a href="https://blog.kobadoo.com/2022/02/what-is-working-memory-how-to-train-it.html" target="_new">this blog post</a></p>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={TrainImg} />
                <h3>Why should you train your <i>working memory</i>?</h3>
                <p>Some programs to train the working memory have shown improvements in everyday functioning, including your <strong>concentration</strong>. It can be especially beneficial to some clinical groups like people with ADHD [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0890856709614271" target="_new">1</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1080/15374416.2010.517162" target="_new">2</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1076/jcen.24.6.781.8395" target="_new">3</a>], that suffer impaired working memory and inattentiveness. One example is the possibility to improve the <strong>school performance</strong> of children with ADHD.
                   Some adults have also improved their brain functions through this kind of exercises [<a href="https://psycnet.apa.org/record/2011-13119-001" target="_new">4</a>] [<a href="https://psycnet.apa.org/record/2017-10607-007" target="_new">5</a>]. Finally, some studies [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0149763413000158" target="_new">6</a>] [<a href="https://www.mitpressjournals.org/doi/full/10.1162/jocn_a_00478" target="_new">7</a>] suggest that training your working memory can <strong>improve your mood</strong> by releasing dopamine in the brain.</p>
            </div>
            <Adsense client="ca-pub-2852428416753185" slot="5099329576"/>
            <Footer />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        mode: state.mode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartGame: () => dispatch(showIntro()),
        onChangeMode: (value) => dispatch(changeMode(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);