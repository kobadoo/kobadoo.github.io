import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';

const APP_NAME = 'KOBADOO';

class App extends Component {

  state = {
    level: 0,
    score: 0
  }

  render() {
    return (
      <Layout>
        <Toolbar
          appName = {APP_NAME} 
          level = {this.state.level} 
          score = {this.state.score} />
        <MainScreen />
      </Layout>
    );
  }
}

export default App;
