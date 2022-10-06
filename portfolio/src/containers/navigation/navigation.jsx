import React from 'react';
import './navigation.css';
import LogoDbWf from '../../images/icons/logo-DarkB-WhiteF.svg';
import AboutMeIcon from '../../images/icons/about-me.svg';
import ProjectsIcon from '../../images/icons/programming.svg';
import HomeText from '../../images/icons/home-text.svg';
import AboutText from '../../images/icons/about-text.svg';
import ProjectsText from '../../images/icons/projects-text.svg';

const Navigation = () => {
    return (
        <div className='navigation-section'>
            <div className='navigation-elements'>
                <div className='navigation--container'>
                    <a href='#' className='navigation--logo'>
                        <img src={LogoDbWf} alt='Logo' />
                        <img src={HomeText} alt='Logo' className='navigation--text'/>
                    </a>
                    
                </div>
                <div className='navigation--separation-bar'></div>
                <div className='navigation--container'>
                    <a href='#aboutID' className='navigation--icon'>
                        <img src={AboutMeIcon} alt='About me icon'/>
                        <img src={AboutText} alt='Logo' className='navigation---icon-text'/>
                    </a>
                </div>
                <div className='navigation--separation-bar'></div>
                <div className='navigation--container'>
                    <a href='#projectID' className='navigation--icon'>
                        <img src={ProjectsIcon} alt='Projects icon'/>
                        <img src={ProjectsText} alt='Logo' className='navigation---icon-text'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
