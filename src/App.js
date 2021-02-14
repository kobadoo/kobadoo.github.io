import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';

const APP_NAME = 'KOBADOO';

class App extends Component {

  state = {
    level: 0,
    score: 0,
    hasGameStarted: false
  }

  startGameHandler = () => {
    this.setState({hasGameStarted: true});
  }

  render() {
    return (
      <Layout>
        <Toolbar
          appName = {APP_NAME} 
          level = {this.state.level} 
          score = {this.state.score} />
        <MainScreen 
          level = {this.state.level}
          startGame = {this.startGameHandler}
          hasGameStarted = {this.state.hasGameStarted}/>
      </Layout>
    );
  }
}

export default App;
