import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../../store/actions/actions';
import MonkeyImg from '../../../images/monkey.png';

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
const QUOTE = 'Kobadoo - Free memory game to train your brain using funny emojis.';
const HASHTAG = '#kobadoo';
const ICON_SIZE = 40;


const EndScreen = (props) => {

    useEffect(() => {
        if (props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x250_3'); 
                window.aipDisplayTag.display('kobadoo-com_728x90_2'); 
            })
        }
    }, [props.showAds]);


    return (
        <div className={classes.EndScreen}>
            { props.showAds ? <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} /> : null }
            <div>
                <h2>Game Over!</h2>
                { props.showAds ? null : <img className={classes.EndImage} src={MonkeyImg} /> }
                <h3>Level: <div className={classes.Results}>{props.lvl}</div></h3>
                <h3>Score: <div className={classes.Results}>{props.scr}</div></h3>
            </div>
            <div>
                <button 
                    className={classes.RestartButton} 
                    onClick={props.onRestartGame}>Restart Game</button>
            </div>
            <div className={classes.Stats}>
                <p>The average user on <i>Kobadoo</i> reaches <strong>Level 9</strong>.</p>
                <p>The all-time record on <i>Kobadoo</i> is <strong>Level 26</strong>.</p>
            </div>
            {!props.iframe?
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
            :
            <div/> 
            }
            { props.showAds ? <div id='kobadoo-com_300x250_3' className={classes.Ad300x250} /> : null }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        scr: state.score,
        iframe: state.isOnIframe,
        showAds: state.showAds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRestartGame: () => dispatch(restartGame())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);