import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Components
import App from './app';
import Home from './home';
import Portfolio from './portfolio';
import About from './about';
import Resume from './resume';


export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="portfolio" component={Portfolio}/>
      <Route path="about" component={About}/>
      <Route path="resume" component={Resume}/>
    </Route>
  </Router>
);
