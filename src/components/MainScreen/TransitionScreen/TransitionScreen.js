import React, {Component} from 'react';
import classes from './TransitionScreen.module.css';

class TransitionScreen extends Component {

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.props.startGame();
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div className={classes.TransitionScreen}>
                <h2>Level {this.props.level - 1} completed!</h2>
            </div>
        );
    }
}

export default TransitionScreen;