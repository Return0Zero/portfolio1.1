import React from 'react';
import './navigation.css';
import LogoDbWf from '../../images/icons/logo-DarkB-WhiteF.svg';
import AboutMeIcon from '../../images/icons/about-me.svg';
import ProjectsIcon from '../../images/icons/programming.svg';

const Navigation = () => {
    return (
        <div className='navigation-section'>
            <div className='navigation-elements'>
                <div className='navigation--container'>
                    <a href='#' className='navigation--logo'>
                        <img src={LogoDbWf} alt='Logo' />
                    </a>
                    
                </div>
                <div className='navigation--separation-bar'></div>
                <div className='navigation--container'>
                    <a href='#aboutID' className='navigation--icon'>
                        <img src={AboutMeIcon} alt='About me icon'/>
                        <p className='navigation-text'>About</p>
                    </a>
                </div>
                <div className='navigation--separation-bar'></div>
                <div className='navigation--container'>
                    <a href='#projectID' className='navigation--icon'>
                        <img src={ProjectsIcon} alt='Projects icon'/>
                        <p className='navigation-text'>Projects</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
