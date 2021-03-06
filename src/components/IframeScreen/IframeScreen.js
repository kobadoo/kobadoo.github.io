import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './IframeScreen.module.css';
import { setIframe, startLevel } from '../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

class IframeScreen extends Component {

    componentDidMount() {
        this.props.onSetIframe();
        this.timeout = setInterval(() => {
            this.props.onStartLevel();
            this.props.history.push('/')
        }, INTERVAL_BEFORE_LEVEL_1);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div className={classes.IframeScreen}>
                <h1>Memorize these emojis</h1>
                <h2>Get ready!</h2>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetIframe: () => dispatch(setIframe()),
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(null, mapDispatchToProps)(IframeScreen);