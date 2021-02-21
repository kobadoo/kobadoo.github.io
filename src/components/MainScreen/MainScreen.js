import React, {Component} from 'react';
import StartScreen from './StartScreen/StartScreen';
import PlayScreen from './PlayScreen/PlayScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';
import EndScreen from './EndScreen/EndScreen';


class MainScreen extends Component {
    render () {
        if (!this.props.hasGameStarted) {
            if (this.props.level === 1) {
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
            if (!this.props.hasGameEnded) {
                return <PlayScreen 
                        level = {this.props.level}
                        updateScore = {this.props.updateScore}
                        updateLevel = {this.props.updateLevel} 
                        endGame = {this.props.endGame}
                        maxNumEmojis = {this.props.maxNumEmojis}
                        />
            }
            else {
                return <EndScreen 
                        level = {this.props.level}
                        score = {this.props.score}
                        restartGame = {this.props.restartGame}
                        />
            }
        }
    }
}

export default MainScreen;