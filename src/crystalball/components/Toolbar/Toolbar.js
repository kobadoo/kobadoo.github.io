import React from 'react';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import { changeScreen } from '../../../store/actions/actions';
import { CARD_SELECTION } from '../../../store/constants';

const APP_NAME = 'CRYSTAL BALL';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo} onClick={() => props.onAbortGame()}>{APP_NAME}</div>
        <div className={classes.Mode}>Fortune Teller</div> 
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        onAbortGame: () => dispatch(changeScreen(CARD_SELECTION))
    };
};

export default connect(null, mapDispatchToProps)(toolbar);