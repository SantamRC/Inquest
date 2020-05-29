import React from 'react';
import log from './login';
import rule from './rules';
import club from './ieee';
import NAV from './nav.js';
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
        </Switch>    
      </div>
    </Router>
  );
}

function home(){
  return(
    <h1>HOME PAGE</h1>
  )
}


export default App;
