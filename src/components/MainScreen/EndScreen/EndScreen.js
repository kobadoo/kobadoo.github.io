import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';
import { MAX_LEVEL } from '../PlayScreen/PlayScreen';
import modes_config from '../../../utils/Modes/modes_config.json';
import {KIDS_MODE} from '../../../store/constants';


import classes from './EndScreen.module.css';
import { 
    FacebookShareButton, 
    TwitterShareButton,
    EmailShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    ViberShareButton,
    FacebookIcon,
    TwitterIcon,
    EmailIcon,
    WhatsappIcon,
    LinkedinIcon,
    ViberIcon
  } from 'react-share'

const URL = 'https://www.kobadoo.com';
const HASHTAG = '#kobadoo';
const ICON_SIZE = 40;
const GOLDFISH = 0x1F420;
const BEE = 0X1F41D;
const HUMAN = 0x1F469;
const ELEPHANT = 0x1F418;
const DOLPHIN = 0X1F42C;
const CUP = 0X1F3C6;


const EndScreen = (props) => {

    const QUOTE = 'I reached level ' + props.lvl + ' at Kobadoo ' + modes_config[props.mode].name + ' memory game! Can you beat me?\n';

    useEffect(() => {
        if (props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x100');
                window.aipDisplayTag.display('kobadoo-com_160x600_1'); 
                window.aipDisplayTag.display('kobadoo-com_160x600_2');
                window.aipDisplayTag.display('kobadoo-com_728x90_2'); 
            })
        }
    }, [props.showAds]);

    return (
        <div className={classes.EndScreen}>
            { props.showAds ? (
                <React.Fragment>
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} />
                    <div id='kobadoo-com_160x600_1' className={classes.Ad160x600L} />
                    <div id='kobadoo-com_160x600_2' className={classes.Ad160x600R} />
                </React.Fragment>
                ) : null
            }
            <div>
                {(props.lvl === MAX_LEVEL) ? <h2>Game Completed!</h2>: <h2>Game Over!</h2>}
                {(props.lvl === MAX_LEVEL) ? <span className={classes.Cup}>{String.fromCodePoint(CUP)}</span> : <img className={classes.EndImage} src={MonkeyImg} alt="" /> }
                <h3>Level: <div className={classes.Results}>{props.lvl} / {MAX_LEVEL}</div></h3>
                <h3>Score: <div className={classes.Results}>{props.scr}</div></h3>
                { props.mode === KIDS_MODE ? null : 
                    props.lvl < 4 ? <div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>bad memory</div>, like a <div className={classes.AnimalName}>goldfish</div> <span>{String.fromCodePoint(GOLDFISH)}</span></div> :
                    props.lvl >=4 && props.lvl < 8 ?<div className={classes.AnimalMemory}>You are <div className={classes.AnimalName}>rather forgetful</div>, just like a <div className={classes.AnimalName}>bee</div> <span>{String.fromCodePoint(BEE)}</span></div> :
                    props.lvl >=8 && props.lvl < 13 ?<div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>average human memory</div> <span>{String.fromCodePoint(HUMAN)}</span></div> :
                    props.lvl >=13 && props.lvl < 18 ?<div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>great memory</div>, just like an <div className={classes.AnimalName}>elephant</div> <span>{String.fromCodePoint(ELEPHANT)}</span></div> :
                    props.lvl >=18 ? <div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>extraordinary memory</div>, like a <div className={classes.AnimalName}>dolphin</div> <span>{String.fromCodePoint(DOLPHIN)}</span></div> : null }
            </div>
            <div>
                <button 
                    className={classes.RestartButton} 
                    onClick={() => props.onRestartGame(1) }>Restart Game</button>
                {(props.lvl > 2 && props.lvl < MAX_LEVEL) ? 
                    <button 
                        className={classes.ContinueButton} 
                        onClick={() => props.onRestartGame(props.lvl - 1) }>Continue level {props.lvl -1}</button>
                : null}
            </div>
            <React.Fragment>
                <div className={classes.ShareText}>Share with your friends!</div>
                <div className={classes.ShareButtons}>
                    <WhatsappShareButton url={URL} title={QUOTE}>
                        <WhatsappIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </WhatsappShareButton>
                    <FacebookShareButton url={URL} quote={QUOTE} hashtag={HASHTAG}>
                        <FacebookIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </FacebookShareButton>
                    <TwitterShareButton url={URL} title={QUOTE + ' ' + HASHTAG + ' '}>
                        <TwitterIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={URL} title={QUOTE}>
                        <LinkedinIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </LinkedinShareButton>
                    <ViberShareButton url={URL} title={QUOTE}>
                        <ViberIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </ViberShareButton>
                    <EmailShareButton url={URL} subject={QUOTE}>
                        <EmailIcon className={classes.ShareButton} round={true} size={ICON_SIZE} />
                    </EmailShareButton>
                </div>
            </React.Fragment>
            { (props.showAds && props.lvl < MAX_LEVEL) ? <div id='kobadoo-com_300x100' className={classes.Ad300x100} /> : null }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score,
        mode: state.mode,
        showAds: state.showAds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRestartGame: (level) => dispatch(restartGame(level))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);