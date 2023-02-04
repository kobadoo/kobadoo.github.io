import React from 'react';
import { connect } from 'react-redux';
import classes from './EndScreen.module.css';
import { changeScreen } from '../../../../store/actions/actions';
import { CARD_SELECTION } from '../../../../store/constants';
import Emoji, {getEmojiHex} from '../../../utils/Modes/Emoji';

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

const URL = 'https://kobadoo.com/#/crystalball';
const HASHTAG = '#CrystalBall';
const ICON_SIZE = 40;

const EndScreen = (props) => {

    const QUOTE = 'I used ' + HASHTAG + ' to predict my future and this is the result:\n'
    + getEmojiHex(props.itemList[0]) + ' ' + getEmojiHex(props.itemList[1]) + ' ' + getEmojiHex(props.itemList[2]) + ' ' + getEmojiHex(props.itemList[3])
    + ' What about yours?\n';

    return (
        <div className={classes.EndScreen}>
            <div>
                {props.itemList.map((value, index) => {
                    return <Emoji className={classes.Emojis} key={index} num={value} />
                })}
            </div>
            <h3>What does it mean?</h3>
            <p>Each emoji has a special meaning in the context of your life. It is up to you how to interpret them.</p>

            <button className={classes.RestartButton} onClick={() => props.onChangeScreen(CARD_SELECTION)}>Try again</button>

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

const mapDispatchToProps = dispatch => {
    return {
        onChangeScreen: (newScreen) => {dispatch(changeScreen(newScreen));}
    };
};

export default connect(null, mapDispatchToProps)(EndScreen);