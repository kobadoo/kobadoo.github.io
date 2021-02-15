import React, {Component} from 'react';
import classes from './PlayScreen.module.css';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';

const EMOJIS_LEVEL_0 = 4;
const MAX_NUM_EMOJIS = 100;

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
        totalEmojis: Array.from({length: MAX_NUM_EMOJIS}, () => Math.floor(Math.random() * MAX_NUM_EMOJIS)),
        showAnswerScreen: false,
        emojis: [0]
    }

    componentDidMount() {
        this.setState({emojis: getRandomSubarray(this.state.totalEmojis, this.state.numEmojis)});
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
                    emojis={this.state.emojis[this.state.item]}
                    />
            );
        }
    } 
}

export default PlayScreen;