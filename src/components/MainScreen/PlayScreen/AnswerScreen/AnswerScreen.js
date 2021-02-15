import React from 'react';
import classes from '../PlayScreen.module.css';
import Emoji from '../../../../utils/Emoji/Emoji';

const sortedEmojiArray = Array.from(Array(100).keys());
const shuffledEmojiArray = shuffleArray(sortedEmojiArray);

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

console.log(shuffledEmojiArray);

const answerScreen = (props) => (
    <div className={classes.PlayScreen}>
        <Emoji num = {8} />
    </div>
);

export default answerScreen;