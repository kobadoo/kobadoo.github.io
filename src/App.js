import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageView, initGA } from './utils/Analytics';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import IframeScreen from './components/IframeScreen/IframeScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';
import { changeShowAds } from './store/actions/actions';


const App = (props) => {

  useEffect(() => {
    initGA('UA-189831762-1');
    PageView();
    document.addEventListener("aip_consentrejected", function(e) {
      props.onChangeShowAds(false);
    });
    document.addEventListener("aip_consentapproved", function(e) {
        props.onChangeShowAds(true);
    });
  }, []);
  

  return (
    <ScrollToTop>
      <Toolbar />
      <Switch>
        <Route path="/credits" exact component={Credits} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/terms" exact component={Terms} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/privacy" exact component={Privacy} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/iframe" exact component={IframeScreen} />
        <Route path="/" component={MainScreen} />
      </Switch>
    </ScrollToTop>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onChangeShowAds: (newValue) => dispatch(changeShowAds(newValue))
  };
};

export default connect(null, mapDispatchToProps)(App);