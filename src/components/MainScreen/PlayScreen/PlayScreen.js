import React, {Component} from 'react';
import { connect } from 'react-redux';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';
import AnswerScreenArithmetic from './AnswerScreen/AnswerScreenArithmetic';
import {ARITHMETIC_MODE, CARDS_MODE, SHAPES_MODE} from '../../../store/constants';


export const MAX_LEVEL = 31;
const MAX_NUM_ITEMS = 42;
const ITEMS_LEVEL_1 = 2;
const TOTAL_NUM_ITEMS = 100;
const TOTAL_NUM_ITEMS_CARDS = 52;
const MIN_NUMBER_ARITHMETIC = -99;
const RANGE_ITEMS_ARITHMETIC = 199;
const INTERVAL_BETWEEN_ITEMS_FASTER = 1300;
const INTERVAL_BETWEEN_ITEMS_SLOWER = 1600;
const EXTRA_TIME_SHAPES = 700;
const EXTRA_TIME_CARDS = 700;
const EXTRA_TIME_ARITHMETIC = 1000;
const LEVEL_START_SLOWER_INTERVALS = 10;
const ARITHMETIC_RANGE_SIZE = 50;
const ARITHMETIC_ITEMS_DISPLAYED = 30;

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

    numItems = ITEMS_LEVEL_1 + parseInt((this.props.lvl -1) / 3);
    totalNumItems = this.props.mode === CARDS_MODE ? TOTAL_NUM_ITEMS_CARDS : TOTAL_NUM_ITEMS;
    totalItems = 
        this.props.mode === ARITHMETIC_MODE ? null
        : getRandomSubarray([...Array(this.totalNumItems).keys()], MAX_NUM_ITEMS-this.props.lvl+1).sort((a, b) => a - b);
    intervalBetweenItems = (this.props.lvl < LEVEL_START_SLOWER_INTERVALS ? INTERVAL_BETWEEN_ITEMS_FASTER : INTERVAL_BETWEEN_ITEMS_SLOWER)
    + (this.props.mode === SHAPES_MODE ? EXTRA_TIME_SHAPES : (this.props.mode === CARDS_MODE ? EXTRA_TIME_CARDS : (this.props.mode === ARITHMETIC_MODE ? EXTRA_TIME_ARITHMETIC : 0)));
    
    state = {
        item: 0,
        showAnswerScreen: false,
        itemList: [0]
    }

    componentDidMount() {
        this.setState({
            itemList: 
                this.props.mode === ARITHMETIC_MODE ? getRandomSubarray([...Array(RANGE_ITEMS_ARITHMETIC).keys()].map(i => i + MIN_NUMBER_ARITHMETIC), this.numItems)
                : getRandomSubarray(this.totalItems, this.numItems)
        });
        this.timeout = setInterval(() => {
            if (this.state.item < this.numItems - 1) {
                this.setState(prevState => ({
                    item: prevState.item + 1
                }));
            }
            else {
                this.setState({showAnswerScreen: true})
                clearInterval(this.timeout);
            }
        }, this.intervalBetweenItems);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        if (!this.state.showAnswerScreen) {
            return (
                <SlideShow 
                    item={this.state.itemList[this.state.item]}
                    mode={this.props.mode}
                />
            );
        }
        else {
            if(this.props.mode == ARITHMETIC_MODE) {
                const correctAnswer = this.state.itemList.reduce((a,b) => a + b, 0);
                const rangeSeed = getRandomInt(0, ARITHMETIC_RANGE_SIZE);
                const possibleAnswers = getRandomSubarray([...Array(ARITHMETIC_RANGE_SIZE).keys()].map(i => i + correctAnswer - rangeSeed), ARITHMETIC_ITEMS_DISPLAYED);
                if (!possibleAnswers.includes(correctAnswer)) {
                    possibleAnswers.pop();
                    possibleAnswers.push(correctAnswer);
                }
                possibleAnswers.sort(function(a,b) { return a - b; });

                return (
                    <AnswerScreenArithmetic 
                        correctAnswer={correctAnswer}
                        possibleAnswers={possibleAnswers}
                        isLastLevel={this.props.lvl === MAX_LEVEL}
                />
                );
            }
            else {
                return (
                    <AnswerScreen 
                        numItems={this.numItems}
                        totalItems={this.totalItems}
                        itemList={this.state.itemList}
                        isLastLevel={this.props.lvl === MAX_LEVEL}
                        mode={this.props.mode}
                />
                );
            }
        }
    } 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mapStateToProps = state => {
    return {
        lvl: state.level,
        mode: state.mode
    }
}

export default connect(mapStateToProps)(PlayScreen);