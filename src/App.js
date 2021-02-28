import React, { Component } from 'react';
import { PageView, initGA } from './utils/Analytics';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';

class App extends Component {

  componentDidMount() {
    initGA('UA-189831762-1');
    PageView();
  }

  render() {
    return (
      <ScrollToTop>
        <Toolbar />
        <Switch>
          <Route path="/credits" exact component={Credits} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/terms" exact component={Terms} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path='/' component={MainScreen} />
        </Switch>
      </ScrollToTop>
    );
  }
}

export default App;