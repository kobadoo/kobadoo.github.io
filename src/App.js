import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PageView, initGA } from './utils/Analytics';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';
import CrystalBall from './crystalball/CrystalBall';
import { changeShowAds } from './store/actions/actions';

const App = (props) => {

  const [isCrystalBall, setIsCrystalBall] = useState();

  useEffect(() => {
    initGA('G-5103PX7L4F');
    PageView();
    document.addEventListener("aip_consentrejected", function(e) {
      props.onChangeShowAds(false);
    });
    document.addEventListener("aip_consentapproved", function(e) {
        props.onChangeShowAds(true);
    });
    setIsCrystalBall(isCrystalBallDomain());
  }, []);
  
  return (
    <ScrollToTop>
      <div id="preroll"></div>
      <Toolbar />
      <Switch>
        <Route path="/credits" exact component={Credits} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/terms" exact component={Terms} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/privacy" exact component={Privacy} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path="/crystalball" exact component={CrystalBall} onUpdate={() => window.scrollTo(0, 0)} />
        { isCrystalBall && <Route component={CrystalBall} onUpdate={() => window.scrollTo(0, 0)} />}
        <Route path="/" exact component={MainScreen} />
      </Switch>
    </ScrollToTop>
  );
}

function isCrystalBallDomain() {
  let host = window.location.host;
  let parts = host.split(".");
  if (parts.length >= 3) {
      return (parts[0] === 'crystalball')
  }
  return false;
}

const mapDispatchToProps = dispatch => {
  return {
      onChangeShowAds: (newValue) => dispatch(changeShowAds(newValue))
  };
};

export default connect(null, mapDispatchToProps)(App);