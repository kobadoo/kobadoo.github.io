import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { startLevel } from '../../../store/actions/actions';

const INTERVAL_BETWEEN_LEVELS = 2000;

class TransitionScreen extends Component {

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.props.onStartLevel();
        }, INTERVAL_BETWEEN_LEVELS);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div className={classes.TransitionScreen}>
                <h2>Level {this.props.lvl - 1} completed!</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lvl: state.level
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitionScreen);