import React, {Component} from 'react';
import { connect } from 'react-redux';
import SlideShow from './SlideShow/SlideShow';
import CardSelectionScreen from './CardSelectionScreen/CardSelectionScreen';
import TransitionScreen from './TransitionScreen/TransitionScreen';
import { CARD_SELECTION, SLIDESHOW, TRANSITION } from '../../../store/constants';
import { END_GAME } from '../../../store/actions/actionTypes';
import EndScreen from './EndScreen/EndScreen';

const NUM_EMOJIS_DISPLAYED = 5;
const TOTAL_EMOJIS = 104;
const NUM_CARDS_DISPLAYED = 16;
const TOTAL_CARDS = 52;

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
        totalItems: [],
        listCardsDisplayed: []
    }

    componentDidMount() {
        if (this.props.screen === CARD_SELECTION) {
            this.setState({
                totalItems: getRandomSubarray([...Array(TOTAL_EMOJIS).keys()], NUM_EMOJIS_DISPLAYED),
                listCardsDisplayed: getRandomSubarray([...Array(TOTAL_CARDS).keys()], NUM_CARDS_DISPLAYED)
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.screen !== prevProps.screen && this.props.screen === CARD_SELECTION) {
            this.setState({
                totalItems: getRandomSubarray([...Array(TOTAL_EMOJIS).keys()], NUM_EMOJIS_DISPLAYED),
                listCardsDisplayed: getRandomSubarray([...Array(TOTAL_CARDS).keys()], NUM_CARDS_DISPLAYED)
            });
        }   
    }
    
    render() {
        switch (this.props.screen) {
            case SLIDESHOW:
                return (<SlideShow itemList={this.state.totalItems} />);
            case TRANSITION:
                return (<TransitionScreen />);
            case END_GAME:
                return (<EndScreen itemList={this.state.totalItems} />);
            default: 
                return (<CardSelectionScreen itemList={this.state.listCardsDisplayed} />);
        }
    } 
}

const mapStateToProps = state => {
    return {
        screen: state.currentScreen
    }
}

export default connect(mapStateToProps)(PlayScreen);