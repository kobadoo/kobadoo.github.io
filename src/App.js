import React, { Component } from 'react';
import { PageView, initGA, eventGA } from './utils/Analytics';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from './utils/axios-stats';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';

const MAX_NUM_EMOJIS = 42;
const MAX_LEVEL = (MAX_NUM_EMOJIS -1) * 3;

class App extends Component {

  state = {
    level: 1,
    score: 0,
    hasGameStarted: false,
    hasGameEnded: false
  }

  componentDidMount() {
    initGA('UA-189831762-1');
    PageView();
  }

  goToHomePageHandler = () => {
    this.setState({ 
      level: 1,
      score: 0,
      hasGameStarted: false,
      hasGameEnded: false
    });
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
    if (this.state.level === MAX_LEVEL) {
      this.endGameHandler();
    }
    else {
      this.setState((prevState => ({
        hasGameStarted: false,
        level: prevState.level + 1
      })));
    }
  }

  endGameHandler = () => {
    this.setState({hasGameEnded: true});
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const stats = {
      level: this.state.level,
      score: this.state.score,
      timestamp: date + ' ' + time
    }
    axios.post('/stats.json', stats);
    eventGA('Game Results', this.state.level, this.state.score);
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Toolbar
              endGame = {this.goToHomePageHandler}
              level = {this.state.level} 
              score = {this.state.score} />
            <Switch>
              <Route path="/credits" exact component={Credits} onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route path="/terms" exact component={Terms} onUpdate={() => window.scrollTo(0, 0)}></Route>
              <Route path="/privacy" exact component={Privacy}></Route>
              <Route
                path='/'
                render={() => (
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
                    maxNumEmojis = {MAX_NUM_EMOJIS}
                  />
                )}
              />
            </Switch>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
