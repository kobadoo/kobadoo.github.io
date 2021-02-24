import React from 'react';
import classes from './Legal.module.css';

const credits = () => (
    <div className={classes.Legal}>
        <h2>Credits</h2>
        <ul>
            <li>Game ideated by Sonja Gajic, specialist in clinical neuropsychology in Oslo (Norway).</li>
            <li>Technical developement by <a href="https://www.arturocalvo.com" title="Arturo Calvo" target="_new">Arturo Calvo</a></li>
            <li>Visuals in collaboration with <a href="https://www.aimade.art" title="aimade.art" target="_new">aimade.art</a></li>
            <li>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_new">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_new">www.flaticon.com</a></li>
        </ul>
        <p><i>(c) Kobadoo.com, 2021. All rights reserved.</i></p>
    </div>
);

export default credits;