import React, {Component} from 'react';
import classes from '../PlayScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';

const POINTS_PER_CORRECT_ANSWER = 20;
const POINTS_PER_COMPLETED_LEVEL = 100;

class AnswerScreen extends Component {

    state = {
        correctEmojis: 0
    }

    emojiClickHandler = (value) => {
        if (this.props.emojis[this.state.correctEmojis] === value) {
            this.setState((prevState => ({correctEmojis: prevState.correctEmojis + 1 }))
            ,() => {
                this.props.updateScore(POINTS_PER_CORRECT_ANSWER);
                if(this.state.correctEmojis === this.props.numEmojis) {
                    this.props.updateLevel();
                    this.props.updateScore(POINTS_PER_COMPLETED_LEVEL);
                }
            });            
        } 
        else {
            console.log('perdiste');
        }
    }

    render() {
        return (
            <div className={classes.PlayScreen}>
                <div>
                    <h2>Select the emojis in the right order</h2>
                </div>
                {this.props.totalEmojis.map((value, index) => {
                    return <Emoji 
                            className={classes.AnswerScreenEmoji} 
                            clickHandler={() => this.emojiClickHandler(value)}
                            key={index} 
                            num = {value} />
                })}
                <div className={classes.EmojisLeft}>{this.props.numEmojis - this.state.correctEmojis} emojis left</div>
            </div>
        );
    }
}

export default AnswerScreen;