import React, {Component} from 'react';
import classes from './TransitionScreen.module.css';

class TransitionScreen extends Component {

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.props.startGame();
        }, 2000);
    }

    render() {
        return (
            <div className={classes.TransitionScreen}>
                <h2>Level {this.props.level} completed!</h2>
            </div>
        );
    }
}

export default TransitionScreen;