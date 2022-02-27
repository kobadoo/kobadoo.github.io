import React from 'react';
import { connect } from 'react-redux';
import StartScreen from './StartScreen/StartScreen';
import IntroScreen from './IntroScreen/IntroScreen';
import PlayScreen from './PlayScreen/PlayScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';
import EndScreen from './EndScreen/EndScreen';

const MainScreen = (props) => {
    
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

const mapStateToProps = state => {
    return {
        lvl: state.level,
        startedLevel: state.hasLevelStarted,
        endedGame: state.hasGameEnded,
        mode: state.mode,
        showIntro: state.showIntro
    }
}

export default connect(mapStateToProps)(MainScreen);