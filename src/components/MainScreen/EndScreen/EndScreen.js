import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';
import { MAX_LEVEL } from '../PlayScreen/PlayScreen';
import modes_config from '../../../utils/Modes/modes_config.json';
import {ARITHMETIC_MODE, KIDS_MODE} from '../../../store/constants';
import { modeIdToModeName } from '../../../utils/Modes/ModeUtils';
import statsSummary from '../../../utils/statsSummary.json';
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

const HASHTAG = '#kobadoo';
const ICON_SIZE = 40;
const GOLDFISH = 0x1F420;
const BEE = 0X1F41D;
const HUMAN = 0x1F469;
const ELEPHANT = 0x1F418;
const DOLPHIN = 0X1F42C;
const WHALE = 0X1F40B;
const CUP = 0X1F3C6;


const EndScreen = (props) => {

    const URL = 'https://www.kobadoo.com/#/' + modeIdToModeName(props.mode);
    const QUOTE = 'I reached level ' + props.lvl + ' at Kobadoo ' + modes_config[props.mode].name + ' memory game! Can you beat me?\n';
    var statsLevel = statsSummary[props.mode].percentileByLevel[props.lvl-1];
    var isGameCompleted = props.scr === modes_config[props.mode].gameCompletedScore;

    return (
        <div className={classes.EndScreen}>
            <div>
                {isGameCompleted ? <h2>Game Completed!</h2>: <h2>Game Over!</h2>}
                {isGameCompleted ? <span className={classes.Cup}>{String.fromCodePoint(CUP)}</span> : <img className={classes.EndImage} src={MonkeyImg} alt="" /> }
                <h3>Level: <div className={classes.Results}>{props.lvl} / {MAX_LEVEL}</div></h3>
                <h3>Score: <div className={classes.Results}>{props.scr}</div></h3>
                { props.mode === KIDS_MODE ? null : 
                    <div className={classes.AnimalMemory}><div className={classes.AnimalName}>{statsLevel}%</div> players reached this level.</div>
                }
                { (props.mode === KIDS_MODE || props.mode === ARITHMETIC_MODE) ? null : 
                    statsLevel >= 80 ? <div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>bad memory</div>, like a <div className={classes.AnimalName}>goldfish</div> <span>{String.fromCodePoint(GOLDFISH)}</span></div> :
                    statsLevel <80 && statsLevel >= 60 ?<div className={classes.AnimalMemory}>You are <div className={classes.AnimalName}>rather forgetful</div>, just like a <div className={classes.AnimalName}>bee</div> <span>{String.fromCodePoint(BEE)}</span></div> :
                    statsLevel <60 && statsLevel >= 40 ?<div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>average human memory</div> <span>{String.fromCodePoint(HUMAN)}</span></div> :
                    statsLevel <40 && statsLevel >= 10 ?<div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>great memory</div>, just like a <div className={classes.AnimalName}>whale</div> <span>{String.fromCodePoint(WHALE)}</span></div> :
                    statsLevel <10 && statsLevel >= 1 ?<div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>amazing memory</div>, like an <div className={classes.AnimalName}>elephant</div> <span>{String.fromCodePoint(ELEPHANT)}</span></div> :
                    statsLevel <1 ? <div className={classes.AnimalMemory}>You have <div className={classes.AnimalName}>extraordinary memory</div>, like a <div className={classes.AnimalName}>dolphin</div> <span>{String.fromCodePoint(DOLPHIN)}</span></div> : null }
            </div>
            <div>
                <button 
                    className={classes.RestartButton} 
                    onClick={() => props.onRestartGame(1) }>Restart Game</button>
                {(props.lvl > 2 && !isGameCompleted) ? 
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
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score,
        mode: state.mode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRestartGame: (level) => dispatch(restartGame(level))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);