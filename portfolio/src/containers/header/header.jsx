import React from 'react';
import './header.css';
import RZMedal from '../../images/rz-medal.png';
import Typewriter from 'typewriter-effect';


const Header = () => {
    return (
        <div className='header-section'>
            <h1 className='main-title'>JORGE DANIEL CRUZ</h1>
            <div className='header-logo'>
                <img src={RZMedal} alt="Return Zero Logo" />
            </div>
            <div className='header-second-title'>
                    <Typewriter 
                        options={{
                            strings: ['Frontend Developer', 'Web Designer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
            </div>
        </div> 
    )
}

export default Header;
