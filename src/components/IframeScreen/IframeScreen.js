import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './IframeScreen.module.css';
import { startIframe } from '../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

class IframeScreen extends Component {

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.props.onStartIframe();
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
        onStartIframe: () => dispatch(startIframe())
    };
};

export default connect(null, mapDispatchToProps)(IframeScreen);