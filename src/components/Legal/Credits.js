import React from 'react';
import { connect } from 'react-redux';
import classes from './Legal.module.css';

const Credits = () => {
    
    return (
    <div className={classes.Legal}>
        <h2>Credits</h2>
        <ul>
            <li>Game ideated by Sonja Gajic, specialist in clinical neuropsychology.</li>
            <li>Technical developement by <a href="https://www.arturocalvo.com" title="Arturo Calvo" target="_blank" rel="noopener noreferrer">Arturo Calvo</a></li>
            <li>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></li>
            <li>Text-to-speech by <a href="https://soundoftext.com/" title="Sound of Text" target="_blank" rel="noopener noreferrer">Sound of Text</a></li>
            <li>Sound effects by <a href="https://pixabay.com/" title="Pixabay" target="_blank" rel="noopener noreferrer">Pixabay</a></li>
            <li>Playing card images made by <a href="https://code.google.com/archive/p/vector-playing-cards/" title="vector-playing-cards" target="_blank" rel="noopener noreferrer">vector-playing-cards</a></li>            
            <li>Google Play and the Google Play logo are trademarks of Google LLC</li>
        </ul>

        <center>
             <p><i>(c) Kobadoo, 2024. All rights reserved.</i></p>
        </center>
    </div>
    );
};

export default connect(null, null)(Credits);