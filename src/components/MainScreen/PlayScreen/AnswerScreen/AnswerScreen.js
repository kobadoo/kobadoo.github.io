import React, {Component} from 'react';
import classes from './AnswerScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';

const POINTS_PER_CORRECT_ANSWER = 20;
const POINTS_PER_COMPLETED_LEVEL = 100;

class AnswerScreen extends Component {

    state = {
        correctEmojis: 0,
        disabled: []
    }

    emojiClickHandler = (index, value) => {

        this.setState({
            disabled: [...this.state.disabled, index]
        });

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
            this.props.endGame();
        }
    }


    render() {
        return (
            <div className={classes.AnswerScreen}>
                <div>
                    <h2>Select in the right order</h2>
                </div>
                {this.props.totalEmojis.map((value, index) => {
                    if(this.state.disabled.indexOf(index) === -1) {
                        return <Emoji 
                                className={classes.AnswerScreenEmoji} 
                                clickHandler={() => this.emojiClickHandler(index, value)}
                                key={index} 
                                num = {value} />
                    }
                    else {
                        return false;
                    }
                })}
                <div className={classes.EmojisLeft}><strong>{this.props.numEmojis - this.state.correctEmojis}</strong> emojis left</div>
            </div>
        );
    }
}

export default AnswerScreen;