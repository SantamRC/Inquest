import React from 'react';
import {Link} from 'react-router-dom';

function NAV(){
    return( 
        <div className="nav-bar">
            <img src='../Assets/Inquest.jpeg' alt='Nothing'></img>
            <ul>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/ieee'><li>IEEE</li></Link>
            </ul>
        </div>
    );
  }

  export default NAV;