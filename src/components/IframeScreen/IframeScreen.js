import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './IframeScreen.module.css';
import { setIframe, startLevel } from '../../store/actions/actions';

const INTERVAL_BEFORE_LEVEL_1 = 2000;

const IframeScreen = (props) => {

    const mode = parseInt(props.match.params.id, 10);

    let textMode = null;

    switch(mode) {
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
        props.onSetIframe(mode);
        const timeout = setInterval(() => {
            props.onStartLevel();
            props.history.push('/')
        }, INTERVAL_BEFORE_LEVEL_1);
      
        // Returned function will be called on component unmount 
        return () => {
            clearInterval(timeout);        }
    }, []);

    return (
        <div className={classes.IframeScreen}>
            {textMode}
            <h2>Get ready!</h2>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSetIframe: (mode) => dispatch(setIframe(mode)),
        onStartLevel: () => dispatch(startLevel())
    };
};

export default connect(null, mapDispatchToProps)(IframeScreen);