import React from 'react';
import './CSS/home.css'

function home(){
    return(
        <div className='home'>
            <img id='home-sherlock' src={require('./Assets/home_sherlock.png')} alt='nothing'></img>
            <div className='card'>
                <div className='card-box text-centre'>
                    <p className='card-text'>
                        "Learning gives creativity, Creativity leads to thinking, Thinking provides knowledge, Knowledge makes you great."
                        Getting anxious and bored? Well, the wait is finally over!!!!! Get ready for a super-fun and highly informative time with our quiz competition INQUEST , organized by IEEE SB NIT Durgapur. We've put together some of the most interesting, shocking and jaw-dropping knowledge to amaze you. Once you get started with this quiz, the questions in your mind will keep coming. End your agonizing curiosity already, and pass this fun facts quiz with flying colors!
                    </p>
                </div>
                <button className='btn btn-dark'>GET STARTED</button>
            </div>
        </div>
    )
}

export default home;