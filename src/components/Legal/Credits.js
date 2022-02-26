import React from 'react';
import {Adsense} from '@ctrl/react-adsense';

import { connect } from 'react-redux';
import classes from './Legal.module.css';

const Credits = () => {
    
    return (
    <div className={classes.Legal}>
        <h2>Credits</h2>
        <ul>
            <li>Game ideated by Sonja Gajic, specialist in clinical neuropsychology.</li>
            <li>Technical developement by <a href="https://www.arturocalvo.com" title="Arturo Calvo" target="_new">Arturo Calvo</a></li>
            <li>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_new">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_new">www.flaticon.com</a></li>
            <li>Google Play and the Google Play logo are trademarks of Google LLC</li>
        </ul>

        <Adsense client="ca-pub-2852428416753185" slot="8924213887"/>

        <center>
        <p><i>(c) Kobadoo, 2022. All rights reserved.</i></p>
        </center>
    </div>
    );
};

export default connect(null,null)(Credits);