import React, {Component} from 'react';
import classes from './MainScreen.module.css';
import StartScreen from './StartScreen/StartScreen';
import SlideShow from './SlideShow/SlideShow';


class MainScreen extends Component {
    render () {
        if (!this.props.hasGameStarted) {
            return <StartScreen startGame = {this.props.startGame}/>;
        }
        else {
            return <SlideShow />;
        }
    }
}

export default MainScreen;