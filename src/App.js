import React from 'react';
import log from './login';
import rule from './rules';
import club from './ieee'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Nav">        
        <Route path='/log' component={log} />
        <Route path='/rules' component={rule} />  
        <Route path='/ieee' component={club} />    
      </div>
    </Router>
  );
}

export default App;
