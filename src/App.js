import React from 'react';
import log from './login';
import rule from './rules';
import club from './ieee';
import NAV from './nav.js';
import board from './leaderboard';
import home from './home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Nav">   
        <NAV/>   
        <Switch> 
          <Route path='/' exact component={home} />
          <Route path='/login' exact component={log} />
          <Route path='/rules' exact component={rule} />  
          <Route path='/ieee' exact component={club} /> 
          <Route path='/leaderboard' exact component={board} /> 
        </Switch>    
      </div>
    </Router>
  );
}

export default App;
