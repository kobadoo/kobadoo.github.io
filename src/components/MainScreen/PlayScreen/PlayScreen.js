import React, {Component} from 'react';
import classes from './PlayScreen.module.css';
import SlideShow from './SlideShow/SlideShow';
import AnswerScreen from './AnswerScreen/AnswerScreen';

const EMOJIS_LEVEL_0 = 4;
const MAX_NUM_EMOJIS = 100;

class PlayScreen extends Component {

    state = {
        item: 0,
        emojis: Array.from({length: EMOJIS_LEVEL_0 + this.props.level}, () => Math.floor(Math.random() * MAX_NUM_EMOJIS)),
        showAnswerScreen: false
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            if (this.state.item < this.state.emojis.length - 1) {
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