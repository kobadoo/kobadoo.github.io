import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.FooterItem}><a href="mailto: kobadooapp@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://twitter.com/kobadooApp" target="_new"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://facebook.com/kobadooApp" target="_new"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
        <div className={classes.FooterItem}><Link to="/terms">Terms</Link></div>
        <div className={classes.FooterItem}><Link to="/privacy">Privacy</Link></div>
        <div className={classes.FooterItem}><Link to="/credits">Credits</Link></div>
    </div>  
);

export default footer;