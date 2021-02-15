import React, {Component} from 'react';
import classes from './MainScreen.module.css';
import StartScreen from './StartScreen/StartScreen';
import PlayScreen from './PlayScreen/PlayScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';


class MainScreen extends Component {
    render () {
        if (!this.props.hasGameStarted) {
            if (this.props.level === 0) {
                return <StartScreen 
                    startGame = {this.props.startGame} />;
            }
            else {
                return <TransitionScreen
                    level = {this.props.level}
                    startGame = {this.props.startGame}
                />
            }
        }
        else {
            return <PlayScreen 
                    level = {this.props.level}
                    updateScore = {this.props.updateScore}
                    updateLevel = {this.props.updateLevel} />;
        }
    }
}

export default MainScreen;