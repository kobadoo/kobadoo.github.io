import React, {Component} from 'react';
import classes from './PlayScreen.module.css';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';

const EMOJIS_LEVEL_0 = 1;
const TOTAL_NUM_EMOJIS = 100;
const MAX_NUM_EMOJIS = 50;

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

class PlayScreen extends Component {

    state = {
        item: 0,
        numEmojis: EMOJIS_LEVEL_0 + this.props.level,
        totalEmojis: getRandomSubarray([...Array(TOTAL_NUM_EMOJIS).keys()], MAX_NUM_EMOJIS).sort((a, b) => a - b),
        showAnswerScreen: false,
        emojis: [0]
    }

    componentDidMount() {
        this.setState(prevState => ({
            emojis: getRandomSubarray(prevState.totalEmojis, prevState.numEmojis)
        }));
        this.timeout = setInterval(() => {
            if (this.state.item < this.state.numEmojis - 1) {
                this.setState(prevState => ({
                    item: prevState.item + 1
                }));
            }
            else {
                this.setState({showAnswerScreen: true})
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        if (!this.state.showAnswerScreen) {
            return (
                <SlideShow emoji={this.state.emojis[this.state.item]}/>
            );
        }
        else {
            return (
                <AnswerScreen 
                    numEmojis={this.state.numEmojis}
                    totalEmojis={this.state.totalEmojis}
                    emojis={this.state.emojis}
                    updateScore = {this.props.updateScore}
                    updateLevel = {this.props.updateLevel}
               />
            );
        }
    } 
}

export default PlayScreen;