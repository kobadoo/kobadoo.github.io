import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './IntroScreen.module.css';
import { startLevel, changeWatchedVideo } from '../../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IntroScreen = (props) => {

    let textMode = null;

    switch(props.mode) {
      case 1:
        textMode = <h1>Memorize these flags in order</h1>;
        break;
      case 2:
        textMode = <h1>Memorize these numbers in order</h1>;
        break;
      case 3:
        textMode = <h1>Memorize these geometric shapes in order</h1>;
        break;
      default:
        textMode = <h1>Memorize these emojis in order</h1>
    }

    useEffect(() => {
        if (props.watchedVideo) {
            const timeout = setInterval(() => {
                props.onStartLevel();
            }, INTERVAL_BEFORE_LEVEL_1);
        
            // Returned function will be called on component unmount 
            return () => {
                clearInterval(timeout);        }
        }
    }, [props.watchedVideo]);

    useEffect(() => {
        if(props.showAds) {
            window.aiptag.cmd.player.push(function() {
                window.aiptag.adplayer = new window.aipPlayer({
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_DISPLAY: 'fullscreen', //default, fullscreen, center, fill
                    TRUSTED: true,
                    LOADING_TEXT: 'loading advertisement',
                    PREROLL_ELEM: function() {return document.getElementById('preroll')},
                    AIP_COMPLETE: function () {props.onChangeWatchedVideo(true)}
                });
            });
        }
        else {
            props.onChangeWatchedVideo(true);
        }
    }, [props.showAds]);

    useEffect(() => {
        if (props.showAds && !props.watchedVideo) {
            if (typeof window.aiptag.adplayer !== 'undefined') {
                window.aiptag.cmd.player.push(function() { window.aiptag.adplayer.startPreRoll(); });
            } else {
                props.onChangeWatchedVideo(true);
            }
        }
    }, [props.showAds, props.watchedVideo]);

    return (
        <div className={classes.IntroScreen}>
            {textMode}
            <h2>Get ready!</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mode: state.mode,
        showAds: state.showAds,
        watchedVideo: state.watchedVideo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel()),
        onChangeWatchedVideo: (watchedVideo) => dispatch(changeWatchedVideo(watchedVideo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);