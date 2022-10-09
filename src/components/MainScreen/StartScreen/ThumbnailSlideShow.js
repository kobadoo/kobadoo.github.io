import React, {useEffect} from 'react';
import classes from './SlideShow.module.css';
import ModeEmojisImg from '../../../images/mode_emojis.png';
import ModeFlagsImg from '../../../images/mode_flags.png';
import ModeNumbersImg from '../../../images/mode_numbers.png';
import ModeShapesImg from '../../../images/mode_shapes.png';
import ModeArithmeticImg from '../../../images/mode_arithmetic.png';
import ModeCardsImg from '../../../images/mode_cards.png';
import ModeKidsImg from '../../../images/mode_kids.png';

const delay = 2500;
const MAX_SLIDES = 4;

export function ThumbnailSlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === MAX_SLIDES - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
          <img className={classes.ModesImg} src={ModeEmojisImg} alt="" />
          <img className={classes.ModesImg} src={ModeFlagsImg} alt="" />
          <img className={classes.ModesImg} src={ModeNumbersImg} alt="" />
          <img className={classes.ModesImg} src={ModeShapesImg} alt="" />
          <img className={classes.ModesImg} src={ModeCardsImg} alt="" />
          <img className={classes.ModesImg} src={ModeArithmeticImg} alt="" />
          <img className={classes.ModesImg} src={ModeKidsImg} alt="" />
      </div>
    </div>
  );
}