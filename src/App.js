import React, { Component } from 'react';
import { PageView, initGA } from './utils/Analytics';
import { Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import MainScreen from './components/MainScreen/MainScreen';
import IframeScreen from './components/IframeScreen/IframeScreen';
import Credits from './components/Legal/Credits';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';
import ScrollToTop from './utils/ScrollToTop';


class App extends Component {

  componentDidMount() {
    initGA('UA-189831762-1');
    PageView();
    // Load cookie banner if not in an iframe
    if(window.self === window.top) {
      const script = document.createElement('script');  
      script.src = "https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=flying&tracking=1&thirdparty=1&noGeoIp=1&hideDetailsBtn=1";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }
  }

  render() {
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
}

export default App;