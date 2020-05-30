import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/nav.css';


function NAV(){
    return( 
        <div className="nav-bar">
            <img id='inquest'src={require('./Assets/Inquest.png')} alt='Nothing' height='150' />
            <ul className='links'>
                <Link id='option' to='/'><li>HOME</li></Link>
                <Link id='option' to='/rules'><li>RULES</li></Link>
                <Link id='option' to='/ieee'><li>IEEE</li></Link>
                <Link id='option' to='/leaderboard'><li>LEADERBOARD</li></Link>
                <Link id='option' to='/login'><li>SIGN IN</li></Link>
            </ul>
        </div>
    );
  }

  export default NAV;