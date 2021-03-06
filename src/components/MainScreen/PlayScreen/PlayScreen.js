import React, {Component} from 'react';
import { connect } from 'react-redux';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';

const MAX_NUM_EMOJIS = 42;
const MAX_LEVEL = (MAX_NUM_EMOJIS -1) * 3;
const EMOJIS_LEVEL_1 = 2;
const TOTAL_NUM_EMOJIS = 100;
const INTERVAL_BETWEEN_EMOJIS_FASTER = 1000;
const INTERVAL_BETWEEN_EMOJIS_SLOWER = 1200;
const LEVEL_START_SLOWER_INTERVALS = 10;

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

    numEmojis = EMOJIS_LEVEL_1 + parseInt((this.props.lvl -1) / 3);
    totalEmojis = getRandomSubarray([...Array(TOTAL_NUM_EMOJIS).keys()], MAX_NUM_EMOJIS).sort((a, b) => a - b);
    intervalBetweenEmojis = this.props.lvl < LEVEL_START_SLOWER_INTERVALS ? INTERVAL_BETWEEN_EMOJIS_FASTER : INTERVAL_BETWEEN_EMOJIS_SLOWER;

    state = {
        item: 0,
        showAnswerScreen: false,
        emojis: [0]
    }

    componentDidMount() {
        this.setState({
            emojis: getRandomSubarray(this.totalEmojis, this.numEmojis)
        });
        this.timeout = setInterval(() => {
            if (this.state.item < this.numEmojis - 1) {
                this.setState(prevState => ({
                    item: prevState.item + 1
                }));
            }
            else {
                this.setState({showAnswerScreen: true})
                clearInterval(this.timeout);
            }
        }, this.intervalBetweenEmojis);
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
                    numEmojis={this.numEmojis}
                    totalEmojis={this.totalEmojis}
                    emojis={this.state.emojis}
                    isLastLevel={this.props.lvl === MAX_LEVEL}
               />
            );
        }
    } 
}

const mapStateToProps = state => {
    return {
        lvl: state.level
    }
}

export default connect(mapStateToProps)(PlayScreen);