import React, {useEffect} from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { connect } from 'react-redux';
import classes from './StartScreen.module.css';
import Footer from '../../Footer/Footer';
import { changeMode, showIntro } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';
import TrainImg from '../../../images/train.png';
import BulbImg from '../../../images/bulb.png';
import ModesImg from '../../../images/modes.png';
import GooglePlayImg from '../../../images/google-play-badge.png';


const StartScreen = (props) => {

    const toggleButtonStyle = {borderLeft: '1px solid rgba(0, 0, 0, 0.12)'};
    const toggleGroupStyle = {display: 'inline-block'};

    useEffect(() => {
        if (props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x100'); 
                window.aipDisplayTag.display('kobadoo-com_300x250_1');
                window.aipDisplayTag.display('kobadoo-com_300x250_2');
                window.aipDisplayTag.display('kobadoo-com_300x250_3');
                window.aipDisplayTag.display('kobadoo-com_160x600_1'); 
                window.aipDisplayTag.display('kobadoo-com_160x600_2');
                window.aipDisplayTag.display('kobadoo-com_728x90_1');
                window.aipDisplayTag.display('kobadoo-com_728x90_2');
                window.aipDisplayTag.display('kobadoo-com_300x250');
            });
        }
    }, [props.showAds]);

    const handleMode = (_, newMode) => {
        props.onChangeMode(newMode);
    };

    return (
        <div className={classes.StartScreen}>

            { props.showAds ? (
                <React.Fragment>
                    <center><div id='kobadoo-com_300x100' className={classes.Ad300x100} /></center>
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                    <div id='kobadoo-com_728x90_1' className={classes.Ad728x90} />
                </React.Fragment>
                ) : null
            }

            <h3 className={classes.HeaderText}>
                <strong>Kobadoo</strong> is a free game that trains your brain by memorizing emojis, playing cards, numbers, arithmetic calculations, flags or geometric shapes.
            </h3>

            <div>
                <p className={classes.SelectModeText}>Select a mode</p>
                <ToggleButtonGroup color='primary' onChange={handleMode} exclusive style={toggleGroupStyle}>
                    <ToggleButton selected={props.mode === 0} value={0} style={toggleButtonStyle}>Emojis</ToggleButton>
                    <ToggleButton selected={props.mode === 5} value={5} style={toggleButtonStyle}>Cards</ToggleButton>
                    <ToggleButton selected={props.mode === 2} value={2} style={toggleButtonStyle}>Numbers</ToggleButton>
                    <ToggleButton selected={props.mode === 3} value={3} style={toggleButtonStyle}>Arithmetic</ToggleButton>
                    <ToggleButton selected={props.mode === 1} value={1} style={toggleButtonStyle}>Flags</ToggleButton>
                    <ToggleButton selected={props.mode === 4} value={4} style={toggleButtonStyle}>Shapes</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className={classes.ButtonsDiv}>
                <button 
                    className={classes.StartButton} 
                    onClick={props.onStartGame}>Start Game</button>
                <a href="https://play.google.com/store/apps/details?id=com.kobadoo" target="_new"><img className={classes.GooglePlayButton} src={GooglePlayImg} alt="Google Play"/></a>
            </div>

            <div className={classes.BenefitsText}>
                <img className={classes.ModesImage} src={ModesImg} alt="" />
                <h3>Six game modes</h3>
                <p>You can practice your working memory with six different modes: <strong>emojis</strong>, playing <strong>cards</strong>, <strong>two-digit numbers</strong>, <strong>arithmetic</strong> calculations, <strong>flags</strong> of the world or coloured geometric <strong>shapes</strong>.</p>
            </div>

            { props.showAds ? <div id='kobadoo-com_300x250_1' className={classes.Ad300x250} /> : null }
            
            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={MonkeyImg} alt="" />
                <h3>How does it work?</h3>
                <p>Select a mode, click on <i>Start Game</i> and <strong>memorize</strong> the items that are displayed.
                Then <strong>select them in the right order</strong> to be able to reach the next level. In the <strong>arithmetic</strong> mode, sum up all the numbers and select the result. It gets more challenging over time! 
                <strong> 100% free</strong>, no download or sign up required. <strong>Play on mobile</strong> for the best experience.</p>
            </div>

            { props.showAds ? <div id='kobadoo-com_300x250' className={classes.Ad300x250} /> : null }

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={BulbImg} alt="" />
                <h3>What is <i>working memory</i>?</h3>
                <p>Working memory is a form of short-term memory, where you temporarily hold information in your mind while processing it. When you play <i>Kobadoo</i> you are actively using your working memory. There are several scientific studies that suggest training of working memory has <strong>beneficial effects</strong> and can <strong>increase your cognitive functions</strong>. You can learn more about working memory on <a href="https://blog.kobadoo.com/2022/02/what-is-working-memory-how-to-train-it.html" target="_new">this blog post</a></p>
            </div>

            { props.showAds ? <div id='kobadoo-com_300x250_3' className={classes.Ad300x250} /> : null }

            <div className={classes.BenefitsText}>
                <img className={classes.StartImage} src={TrainImg} alt="" />
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
        showAds: state.showAds,
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