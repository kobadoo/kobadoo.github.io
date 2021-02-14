import React, {Component} from 'react';
import classes from './MainScreen.module.css';
import StartScreen from './StartScreen/StartScreen';
import PlayScreen from './PlayScreen/PlayScreen';


class MainScreen extends Component {
    render () {
        if (!this.props.hasGameStarted) {
            return <StartScreen startGame = {this.props.startGame} />;
        }
        else {
            return <PlayScreen level = {this.props.level} />;
        }
    }
}

export default MainScreen;