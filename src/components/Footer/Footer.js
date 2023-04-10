import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.FooterItem}><a href="mailto: hello@kobadoo.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://twitter.com/kobadooApp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://facebook.com/kobadooApp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://www.youtube.com/@kobadoo/videos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></div>
        <div className={classes.FooterItem}><a href="https://blog.kobadoo.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBlogger} size="2x" /></a></div>
        <div className={classes.FooterItem}><Link to="/terms">Terms</Link></div>
        <div className={classes.FooterItem}><Link to="/privacy">Privacy</Link></div>
        <div className={classes.FooterItem}><Link to="/credits">Credits</Link></div>
    </div>  
);

export default footer;