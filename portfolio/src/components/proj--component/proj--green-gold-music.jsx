import React from 'react';
import './proj--game.css';
import MusicLogo from '../../images/projects/green-gold-music/green-gold-music-circle.png';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import MusicLogoSq from '../../images/projects/green-gold-music/green-gold-music.png';


const ProjMusic = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={MusicLogo} alt='Embassy of Honduras Logo' className='game-logo' />
                <h1 className='proj--game-title'>Green Gold Music</h1>
            </div>
            <div className='proj--content'>
                <p>Green Gold Music, a Hispanic music studio based in New York City founded by El Camarada. This project is currently under development.</p>
            </div>
            <div className='proj--two-images-embassy'> 
                <div className='proj--image1'>
                    <p>Green Gold Music</p>
                    <img src={MusicLogoSq} alt='homepage' className='proj---embassy-image' />
                </div>
            </div>
            <div className='proj--buttons-container'>
            <img src={CodingButton} alt='Coding Button' className='proj--buttons'/>
            <img src={WebButton} alt='Web Button' className='proj--buttons'/>
               
            </div>
        </div>
    )
}

export default ProjMusic;
