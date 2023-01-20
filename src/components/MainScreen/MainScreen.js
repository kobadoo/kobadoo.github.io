import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StartScreen from './StartScreen/StartScreen';
import IntroScreen from './IntroScreen/IntroScreen';
import PlayScreen from './PlayScreen/PlayScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';
import EndScreen from './EndScreen/EndScreen';
import { showIntro, changeMode } from '../../store/actions/actions';
import {EMOJIS_MODE, FLAGS_MODE, NUMBERS_MODE, ARITHMETIC_MODE, CARDS_MODE, KIDS_MODE} from '../../store/constants';

const MainScreen = (props) => {

    useEffect(() => {
        // If a mode is entered as parameter, enter directly that mode
        var mode = parseInt(props.match.params.mode);
        switch (mode) {
            case EMOJIS_MODE: case FLAGS_MODE: case NUMBERS_MODE: case ARITHMETIC_MODE: case CARDS_MODE: case KIDS_MODE:
                props.onStartGame(mode); break;
            default: break;
        }
    }, []);
    
    if (!props.startedLevel) {
        if (props.showIntro) {
            return <IntroScreen />;
        }
        else if (props.lvl === 1) {
            return <StartScreen />;
        }
        else {
            return <TransitionScreen />
        }
    }
    else {
        if (!props.endedGame) {
            return <PlayScreen />
        }
        else {
            return <EndScreen />
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartGame: (mode) => {
            dispatch(changeMode(mode));
            dispatch(showIntro());
        }
    };
};

const mapStateToProps = state => {
    return {
        lvl: state.level,
        startedLevel: state.hasLevelStarted,
        endedGame: state.hasGameEnded,
        mode: state.mode,
        showIntro: state.showIntro
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);