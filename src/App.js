import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';

const APP_NAME = 'KOBADOO';

class App extends Component {

  state = {
    level: 1,
    score: 0,
    hasGameStarted: false,
    hasGameEnded: false
  }

  startGameHandler = () => {
    this.setState(
      { hasGameStarted: true });
  }

  restartGameHandler = () => {
    this.setState(
      { 
        level: 1,
        score: 0,
        hasGameStarted: true,
        hasGameEnded: false 
      });
  }

  updateScoreHandler = (addedScore) => {
    this.setState((prevState => ({score: prevState.score + addedScore})));
  }

  updateLevelHandler = () => {
    this.setState((prevState => ({
      hasGameStarted: false,
      level: prevState.level + 1
    })));
  }

  endGameHandler = () => {
    this.setState({hasGameEnded: true});
    ReactGA.event({
      category: 'Score',
      action: 'End Game',
      value: this.state.score
    });
    ReactGA.event({
      category: 'Level',
      action: 'End Game',
      value: this.state.level
    });
  }

  render() {
    return (
      <Layout>
        <Toolbar
          appName = {APP_NAME} 
          level = {this.state.level} 
          score = {this.state.score} />
        <MainScreen 
          updateScore = {this.updateScoreHandler}
          updateLevel = {this.updateLevelHandler}
          level = {this.state.level}
          startGame = {this.startGameHandler}
          restartGame = {this.restartGameHandler}
          hasGameStarted = {this.state.hasGameStarted}
          endGame = {this.endGameHandler}
          hasGameEnded = {this.state.hasGameEnded}
          score = {this.state.score}
        />
      </Layout>
    );
  }
}

export default App;
