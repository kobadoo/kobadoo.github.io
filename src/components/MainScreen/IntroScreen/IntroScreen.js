import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import classes from './IntroScreen.module.css';
import { startLevel, changeLanguage } from '../../../store/actions/actions';
import modes_config from '../../../utils/Modes/modes_config.json';
import { KIDS_MODE } from '../../../store/constants';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IntroScreen = (props) => {

    const toggleButtonStyle = {border: '1px solid rgba(80, 80, 80, 0.75)', WebkitBackdropFilter: 'contrast(80%)', backdropFilter: 'contrast(80%)', color: 'teal'};
    const toggleGroupStyle = {display: 'inline-block', margin: '30px 0px 30px 0px' };
    let textMode = <h1>{modes_config[props.mode].introScreenText[props.lang]}</h1>;
    let subTextMode = <h2>{modes_config[props.mode].introScreenSubText[props.lang]}</h2>;
    let selectLanguageText = <h1>Select your language</h1>;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (props.mode !== KIDS_MODE) {
            props.onChangeLanguage('EN');
        }
        
        if (props.mode !== KIDS_MODE || props.lang !== null) {
            const timeout = setInterval(() => {
                props.onStartLevel();
            }, INTERVAL_BEFORE_LEVEL_1);
        
            // Returned function will be called on component unmount 
            return () => {
                clearInterval(timeout);        }
        }
    }, [props]);
    
    return (
        <div className={classes.IntroScreen}>

            { props.lang === null ? selectLanguageText : textMode }

            {(props.mode === KIDS_MODE && props.lang === null) ?
                <ToggleButtonGroup color='primary' onChange={(_, newLang) => props.onKidsStart(newLang)} exclusive style={toggleGroupStyle}>
                    <ToggleButton value={'EN'} style={toggleButtonStyle}>English</ToggleButton>
                    <ToggleButton value={'ES'} style={toggleButtonStyle}>Español</ToggleButton>
                    <ToggleButton value={'NO'} style={toggleButtonStyle}>Norsk</ToggleButton>
                </ToggleButtonGroup> : subTextMode }
        </div>
    );
}


const mapStateToProps = state => {
    return {
        mode: state.mode,
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onKidsStart: (lang) => {
            dispatch(changeLanguage(lang));
            dispatch(startLevel());
        },
        onStartLevel: () => {
            dispatch(startLevel());
        },
        onChangeLanguage: (lang) => dispatch(changeLanguage(lang))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);