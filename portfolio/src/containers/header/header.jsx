import React from 'react';
import './header.css';
import Typewriter from 'typewriter-effect';

import LogoMedalComponent from '../logomedalcomponent/logomedalcomponent';


const Header = () => {
    return (
        <div className='header-section'>
            <h1 className='main-title'>JORGE DANIEL CRUZ</h1>
            <div className='header-logo-second'>
                <span className='medal-blocker'></span>
                <LogoMedalComponent/>
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
