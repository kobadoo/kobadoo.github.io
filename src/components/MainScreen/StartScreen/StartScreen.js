import React from 'react';
import { useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Footer from '../../Footer/Footer';
import MonkeyImg from '../../../images/monkey.png';
import TrainImg from '../../../images/train.png';
import BulbImg from '../../../images/bulb.png';
import GooglePlayImg from '../../../images/google-play-badge.png';
import { ThumbnailSlideShow } from './ThumbnailSlideShow';
import { modeIdToModeName } from '../../../utils/Modes/ModeUtils';

const StartScreen = (props) => {

    const toggleButtonStyle = {borderLeft: '1px solid rgba(0, 0, 0, 0.12)', backgroundColor: 'whitesmoke'};
    const toggleGroupStyle = {display: 'inline-block'};
    const CRYSTAL_BALL_EMOJI = 0x1F52E;
    const navigate = useNavigate();
    const handleMode = (_, newMode) => {
        let path = '/' + modeIdToModeName(newMode);
        navigate(path);
    };

    return (
        <div className={classes.StartScreen}>

            <h3 className={classes.HeaderText}>
                <strong>Kobadoo</strong> is a free game that trains your brain by memorizing emojis, playing cards, numbers, arithmetic calculations, flags or geometric shapes. Children can also learn new words in different languages using the <i>Kids</i> mode.
            </h3>

            <div>
                <p className={classes.SelectModeText}>Select a mode to play</p>
                <ToggleButtonGroup color='primary' onChange={handleMode} exclusive style={toggleGroupStyle}>
                    <ToggleButton selected={props.mode === 0} value={0} style={toggleButtonStyle}>Emojis</ToggleButton>
                    <ToggleButton selected={props.mode === 5} value={5} style={toggleButtonStyle}>Cards</ToggleButton>
                    <ToggleButton selected={props.mode === 2} value={2} style={toggleButtonStyle}>Numbers</ToggleButton>
                    <ToggleButton selected={props.mode === 3} value={3} style={toggleButtonStyle}>Arithmetic</ToggleButton>
                    <ToggleButton selected={props.mode === 1} value={1} style={toggleButtonStyle}>Flags</ToggleButton>
                    <ToggleButton selected={props.mode === 4} value={4} style={toggleButtonStyle}>Shapes</ToggleButton>
                    <ToggleButton selected={props.mode === 6} value={6} style={toggleButtonStyle}>Kids</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className={classes.BenefitsText}>
                <ThumbnailSlideShow />
                <h3>Seven game modes</h3>
                <p>You can practice your working memory with different modes: <strong>emojis</strong>, playing <strong>cards</strong>, <strong>two-digit numbers</strong>, <strong>arithmetic</strong> calculations, <strong>flags</strong> of the world or coloured geometric <strong>shapes</strong>. Children can also learn new vocabulary in <strong>English</strong>, <strong>Spanish</strong> or <strong>Norwegian</strong> using the <strong><i>Kids</i></strong> mode, with several studies [<a href="https://blog.kobadoo.com/2023/01/how-kobadoo-kids-helps-children-develop.html" target="_new">1</a>] backing the effectiveness of this technique. Watch all the demos on <a href="https://www.youtube.com/@kobadoo/videos" target="_new">our Youtube channel</a>!</p>
            </div>
            
            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={MonkeyImg} alt="" />
                <h3>How does it work?</h3>
                <p>Choose a mode and <strong>memorize</strong> the items that are displayed.
                Then select them <strong>in the right order</strong> to reach the next level. In the <strong>arithmetic</strong> mode, sum up all the numbers and select the result. It gets more challenging over time! The <strong><i>Kids</i></strong> mode is a fun way for children to learn new vocabulary in different languages.&nbsp;
                <i>Kobadoo</i> is <strong> 100% free</strong>, no sign up is required. Play directly on browser or install the Android app.</p>
                <a href="https://play.google.com/store/apps/details?id=com.kobadoo" target="_new"><img className={classes.GooglePlayButton} src={GooglePlayImg} alt="Google Play"/></a>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={BulbImg} alt="" />
                <h3>What is <i>working memory</i>?</h3>
                <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>. You can learn more about working memory on <a href="https://blog.kobadoo.com/2022/02/what-is-working-memory-how-to-train-it.html" target="_new">this blog post</a></p>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={TrainImg} alt="" />
                <h3>Why should you train your <i>working memory</i>?</h3>
                <p>Some programs to train the working memory have shown improvements in everyday functioning, including your <strong>concentration</strong>. It can be especially beneficial to some clinical groups like people with ADHD [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0890856709614271" target="_new">2</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1080/15374416.2010.517162" target="_new">3</a>] [<a href="https://www.tandfonline.com/doi/abs/10.1076/jcen.24.6.781.8395" target="_new">4</a>], that suffer impaired working memory and inattentiveness. One example is the possibility to improve the <strong>school performance</strong> of children with ADHD.
                   Some adults have also improved their brain functions through this kind of exercises [<a href="https://psycnet.apa.org/record/2011-13119-001" target="_new">5</a>] [<a href="https://psycnet.apa.org/record/2017-10607-007" target="_new">6</a>]. Finally, some studies [<a href="https://www.sciencedirect.com/science/article/abs/pii/S0149763413000158" target="_new">7</a>] [<a href="https://www.mitpressjournals.org/doi/full/10.1162/jocn_a_00478" target="_new">8</a>] suggest that training your working memory can <strong>improve your mood</strong> by releasing dopamine in the brain.</p>
            </div>

            <div className={classes.BenefitsText}>
                <div role="img" className={classes.Emoji}>
                    <span>{String.fromCodePoint(CRYSTAL_BALL_EMOJI)}</span>
                </div>
                <h3>Try Kobadoo Crystal Ball!</h3>
                <p>Learn what the future awaits you with this fun game that uses playing cards and emojis to tell your fortune.</p>
                <button 
                    className={classes.CrystalBallButton} 
                    onClick={() => window.open('/#/crystalball', '_blank')}>Play Crystal Ball</button>
            </div>
            
            <Footer />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        mode: state.mode,
        lang: state.lang
    }
}

export default connect(mapStateToProps, null)(StartScreen);