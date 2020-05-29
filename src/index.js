import React from 'react';
import ReactDOM from 'react-dom';
import './App.js';
import {Link,BrowserRouter} from 'react-router-dom';
 

ReactDOM.render(
<ul>
  <BrowserRouter>
    <Link to='/'>
      <li>Home</li>
    </Link>
    <Link to='/rules' >
      <li>Rules</li>
    </Link>
    <Link to='/ieee'>
      <li>IEEE</li>
    </Link>
    <Link to='/log'>
      <li>Sign In</li>
    </Link>
  </BrowserRouter>
</ul>,
document.getElementById('header'));