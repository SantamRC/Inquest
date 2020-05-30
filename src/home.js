import React from 'react';
import './CSS/home.css'

function home(){
    return(
        <div>
            <img id='home-sherlock' src={require('./Assets/home_sherlock.png')} alt='nothing'></img>
            <div className='card'>
                <div className='card-box text-centre'>
                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <button className='btn btn-dark'>GET STARTED</button>
            </div>
        </div>
    )
}

export default home;