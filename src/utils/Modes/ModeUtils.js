import modes_config from './modes_config.json';
import {EMOJIS_MODE, FLAGS_MODE, NUMBERS_MODE, ARITHMETIC_MODE, CARDS_MODE, KIDS_MODE, SHAPES_MODE, NO_MODE} from '../../store/constants';


export const modeIdToModeName = (modeId) => {
  return modes_config[modeId].name.toLowerCase();
};

export const modeNameToModeId = (modeName) => {
  switch (modeName) {
    case 'emojis': return EMOJIS_MODE;
    case 'flags': return FLAGS_MODE;
    case 'numbers': return NUMBERS_MODE;
    case 'arithmetic': return ARITHMETIC_MODE;
    case 'shapes': return SHAPES_MODE;
    case 'cards': return CARDS_MODE;
    case 'kids': return KIDS_MODE;
    case undefined: case '': case null: return NO_MODE; // StartScreen
    default: return null; // 404 error
  }
};