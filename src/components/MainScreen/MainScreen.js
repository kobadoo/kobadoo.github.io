import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import StartScreen from './StartScreen/StartScreen';
import IntroScreen from './IntroScreen/IntroScreen';
import PlayScreen from './PlayScreen/PlayScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';
import EndScreen from './EndScreen/EndScreen';
import { showIntro, changeMode, abortGame } from '../../store/actions/actions';
import { modeNameToModeId } from '../../utils/Modes/ModeUtils';
import {EMOJIS_MODE, FLAGS_MODE, NUMBERS_MODE, ARITHMETIC_MODE, SHAPES_MODE, CARDS_MODE, KIDS_MODE, NO_MODE} from '../../store/constants';
import NotFound from '../NotFound/NotFound';

const MainScreen = (props) => {

    const { mode } = useParams();
    const [audioObject, setAudioObject] = useState(null);
    const [is404, setIs404] = useState(false);

    useEffect(() => {
        // If a mode is entered as parameter, enter directly that mode
        var modeId = modeNameToModeId(mode);
        switch (modeId) {
            case EMOJIS_MODE: case FLAGS_MODE: case NUMBERS_MODE: case ARITHMETIC_MODE: case SHAPES_MODE: case CARDS_MODE: case KIDS_MODE:
                props.onStartGame(modeId); break;
            case NO_MODE: props.onAbortGame(); break; // StartScreen
            default: setIs404(true); break; // 404 error
        }
    }, [mode]);

    useEffect(() => {
        if (props.endedGame) {
            setAudioObject(null);
        }
        else {
            setAudioObject(new Audio());
        }
    }, [props.endedGame]);

    if (is404) {
        return <NotFound />;
    }
    else {
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
                return <PlayScreen audioObject = {audioObject} />
            }
            else {
                return <EndScreen />
            }
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartGame: (mode) => {
            dispatch(changeMode(mode));
            dispatch(showIntro());
        },
        onAbortGame: () => {
            dispatch(abortGame());
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