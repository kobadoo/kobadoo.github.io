import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import classes from './SlideShow.module.css';
import Emoji from '../../../utils/Modes/Emoji';
import { changeScreen } from '../../../../store/actions/actions';
import { END_GAME } from '../../../../store/actions/actionTypes';

const INTERVAL_BETWEEN_EMOJIS = 2000;

const SlideShow = (props) => {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentItem(prev => prev + 1);
        }, INTERVAL_BETWEEN_EMOJIS);    
        return () => {clearInterval(timeout); }
    }, []);

    useEffect(() => {
        if (currentItem === props.itemList.length) {
            props.onChangeScreen(END_GAME);    
        }
    }, [currentItem]);

    return (
        currentItem < props.itemList.length ?
        <div className={classes.SlideShowScreen}>
            <Emoji className={classes.SlideShowFont} num={props.itemList[currentItem]} />
        </div> : null);
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeScreen: (newScreen) => {dispatch(changeScreen(newScreen))}
    };
};

export default connect(null, mapDispatchToProps,)(SlideShow);