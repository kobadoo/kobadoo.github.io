import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import classes from './IntroScreen.module.css';
import { startLevel, changeWatchedVideo, activateAudio, changeLanguage } from '../../../store/actions/actions';
import modes_config from '../../../utils/Modes/modes_config.json';
import { KIDS_MODE } from '../../../store/constants';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IntroScreen = (props) => {

    const toggleButtonStyle = {borderLeft: '1px solid rgba(0, 0, 0, 0.12)'};
    const toggleGroupStyle = {display: 'inline-block', margin: '30px 0px 0px 0px' };
    let textMode = <h1>{modes_config[props.mode].introScreenText[props.lang]}</h1>;
    let subTextMode = <h2>{modes_config[props.mode].introScreenSubText[props.lang]}</h2>;
    let selectLanguageText = <h1>Select your language</h1>;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (props.mode !== KIDS_MODE) {
            props.onChangeLanguage('EN');
        }
        
        if (props.watchedVideo && (props.mode !== KIDS_MODE || props.lang !== null)) {
            const timeout = setInterval(() => {
                props.onStartLevel(props.lang);
            }, INTERVAL_BEFORE_LEVEL_1);
        
            // Returned function will be called on component unmount 
            return () => {
                clearInterval(timeout);        }
        }
    }, [props.watchedVideo, props]);

    useEffect(() => {
        if(!props.showAds) {
            props.onChangeWatchedVideo(true);
        }

        if (props.mode === KIDS_MODE && props.lang === null && props.showAds) {
            window.aiptag.cmd.display.push( () => {
                window.aipDisplayTag.display('kobadoo-com_300x250_4');
                window.aipDisplayTag.display('kobadoo-com_728x90_2');
            })
        }
    }, [props.showAds, props]);

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

    if (props.showAds && !props.watchedVideo) {
        if (typeof window.aiptag.adplayer !== 'undefined') {
            window.aiptag.cmd.player.push(function() { window.aiptag.adplayer.startPreRoll(); });
        } else {
            props.onChangeWatchedVideo(true);
        }
    }
    
    if (props.watchedVideo) {
        return (
            <div className={classes.IntroScreen}>

                {(props.mode === KIDS_MODE && props.lang === null && props.showAds) ? 
                    <div id='kobadoo-com_728x90_2' className={classes.Ad728x90} /> : null
                }

                { props.lang === null ? selectLanguageText : textMode }

                {(props.mode === KIDS_MODE && props.lang === null) ?
                    <ToggleButtonGroup color='primary' onChange={(_, newLang) => props.onStartLevel(newLang)} exclusive style={toggleGroupStyle}>
                        <ToggleButton value={'EN'} style={toggleButtonStyle}>English</ToggleButton>
                        <ToggleButton value={'ES'} style={toggleButtonStyle}>Español</ToggleButton>
                        <ToggleButton value={'NO'} style={toggleButtonStyle}>Norsk</ToggleButton>
                    </ToggleButtonGroup> : subTextMode }

                { (props.mode === KIDS_MODE && props.lang === null && props.showAds) ? <div id='kobadoo-com_300x250_4' className={classes.Ad300x250} /> : null }  
                
            </div>
        );
    }
    else {
        return null;
    }
}

const mapStateToProps = state => {
    return {
        mode: state.mode,
        showAds: state.showAds,
        watchedVideo: state.watchedVideo,
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: (lang) => {
            const audio = new Audio();
            dispatch(activateAudio(audio));
            dispatch(changeLanguage(lang));
            dispatch(startLevel());
        },
        onChangeWatchedVideo: (watchedVideo) => dispatch(changeWatchedVideo(watchedVideo)),
        onChangeLanguage: (lang) => dispatch(changeLanguage(lang))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);