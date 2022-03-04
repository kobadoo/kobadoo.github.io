import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageView, initGA } from './utils/Analytics';
import { Route, Switch, Redirect } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';


const App = () => {

  useEffect(() => {
    initGA('UA-189831762-1');
    PageView();
  }, []);

  useEffect(() => {
    console.log(window.showAds);
  }, [window.showAds]);
  
  return (
    <ScrollToTop>
      <Toolbar />
      <Switch>
        <Route path="/credits" exact component={Credits} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/terms" exact component={Terms} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/privacy" exact component={Privacy} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/" exact component={MainScreen} />
      </Switch>
    </ScrollToTop>
  );
}

export default connect(null, null)(App);