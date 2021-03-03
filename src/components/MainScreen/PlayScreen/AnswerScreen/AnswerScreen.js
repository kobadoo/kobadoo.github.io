import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './AnswerScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';
import { passLevel, increaseScore, endGame } from '../../../../store/actions/actions';

const POINTS_PER_CORRECT_ANSWER = 20;

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
                this.props.onScoreIncreased(POINTS_PER_CORRECT_ANSWER);
                if(this.state.correctEmojis === this.props.numEmojis) {
                    this.props.onLevelPassed();
                    if(this.props.isLastLevel) {
                        this.props.onEndGame();
                    }
                }
            });            
        } 
        else {
            this.props.onEndGame();
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
                <div id="ezoic-pub-ad-placeholder-106"> </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLevelPassed: () => dispatch(passLevel()),
        onEndGame: () => dispatch(endGame()),
        onScoreIncreased: (addedScr) => dispatch(increaseScore(addedScr))
    };
};

export default connect(null, mapDispatchToProps)(AnswerScreen);