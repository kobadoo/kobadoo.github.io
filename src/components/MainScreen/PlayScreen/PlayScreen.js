import React, {Component} from 'react';
import { connect } from 'react-redux';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';
import AnswerScreenArithmetic from './AnswerScreen/AnswerScreenArithmetic';
import AnswerScreenKids from './AnswerScreen/AnswerScreenKids';
import {ARITHMETIC_MODE, KIDS_MODE} from '../../../store/constants';
import modes_config from '../../../utils/Modes/modes_config.json';

export const MAX_LEVEL = 31;
const ITEMS_LEVEL_1 = 2;

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
    totalItems = this.props.mode === KIDS_MODE ? getRandomSubarray([...Array(modes_config[this.props.mode].totalNumItems).keys()], modes_config[this.props.mode].maxItemsAnswerScreen)
        : getRandomSubarray([...Array(modes_config[this.props.mode].totalNumItems).keys()], modes_config[this.props.mode].maxItemsAnswerScreen-parseInt((this.props.lvl -1) / 3)).sort((a, b) => a - b);
    intervalBetweenItems = this.props.lvl < modes_config[this.props.mode].firstDifficultLevel ? modes_config[this.props.mode].intervalSecondsEasyLevels : modes_config[this.props.mode].intervalSecondsDifficultLevels;
    
    state = {
        item: 0,
        showAnswerScreen: false,
        itemList: []
    }

    componentDidMount() {
        this.setState({
            itemList: 
                this.props.mode === ARITHMETIC_MODE ? getRandomSubarray([...Array(modes_config[this.props.mode].rangeSeedItems).keys()].map(i => i +modes_config[this.props.mode].minNumberRange), this.numItems)
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
                this.state.itemList.length > 0 ?
                    <SlideShow 
                        item={this.state.itemList[this.state.item]}
                        mode={this.props.mode}
                    /> : null
            );
        }
        else {
            switch(this.props.mode) {
                case ARITHMETIC_MODE:
                    const correctAnswer = this.state.itemList.reduce((a,b) => a + b, 0);
                    const rangeSeed = getRandomInt(0, modes_config[this.props.mode].rangeDisplayedItems);
                    const possibleAnswers = getRandomSubarray([...Array(modes_config[this.props.mode].rangeDisplayedItems).keys()].map(i => i + correctAnswer - rangeSeed), modes_config[this.props.mode].maxItemsAnswerScreen);
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
                case KIDS_MODE:
                    return (
                        <AnswerScreenKids 
                            numItems={this.numItems}
                            totalItems={this.totalItems}
                            itemList={this.state.itemList}
                            isLastLevel={this.props.lvl === MAX_LEVEL}
                            mode={this.props.mode}
                        />
                    );
                default:
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