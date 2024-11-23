import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './TransitionScreen.module.css';
import { changeScreen } from '../../../../store/actions/actions';
import { SLIDESHOW } from '../../../../store/constants';

const INTERVAL = 2500;
const CRYSTAL_BALL_EMOJI = 0x1F52E;

const TransitionScreen = (props) => {

    const introText = <h1>This is the fortune that awaits you...</h1>;

    useEffect(() => {
        const timeout = setInterval(() => {
            props.onChangeScreen(SLIDESHOW);
        }, INTERVAL);

        return () => {
            clearInterval(timeout);        
        }        
    }, []);

    return (
        <div className={classes.TransitionScreen}>
            {introText}
            <div role="img" className={classes.Emoji}>
                <span>{String.fromCodePoint(CRYSTAL_BALL_EMOJI)}</span>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeScreen: (newScreen) => {dispatch(changeScreen(newScreen))}
    };
};

export default connect(null, mapDispatchToProps)(TransitionScreen);