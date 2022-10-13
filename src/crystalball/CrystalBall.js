import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './components/Toolbar/Toolbar';
import PlayScreen from './components/PlayScreen/PlayScreen';

const CrystalBall = () => {

  return (
    <React.Fragment>
      <Toolbar />
        <PlayScreen />
    </React.Fragment>
  );
}

export default connect(null, null)(CrystalBall);