import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './IntroScreen.module.css';
import { startLevel } from '../../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IntroScreen = (props) => {

    let textMode = null;

    switch(props.mode) {
      case 1:
        textMode = <h1>Memorize these flags in order</h1>;
        break;
      case 2:
        textMode = <h1>Memorize these numbers in order</h1>;
        break;
      default:
        textMode = <h1>Memorize these emojis in order</h1>
    }

    useEffect(() => {
        const timeout = setInterval(() => {
            props.onStartLevel();
        }, INTERVAL_BEFORE_LEVEL_1);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, []);

    return (
        <div className={classes.IntroScreen}>
            {textMode}
            <h2>Get ready!</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mode: state.mode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);