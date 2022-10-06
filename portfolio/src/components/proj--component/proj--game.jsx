import React from 'react';
import './proj--game.css';
import GameLogo from '../../images/projects/game/game-icon.svg';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import GameLevel1 from '../../images/projects/game/level1.png';
import GameLevel2 from '../../images/projects/game/level2.png';
import EmbassyAfter from '../../images/projects/embassy-of-honduras/embassy-v1.2.png'


const ProjGame = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={GameLogo} alt='Embassy of Honduras Logo' className='game-logo' />
                <h1 className='proj--game-title'>Kaboom.js Game</h1>
            </div>
            <div className='proj--content'>
                <p>In this project I build a small video game utilizing Kaboom.js and JavaScript. The goal of this video game was to learn and practice new concepts of JavaScript but more importantly to teach my 12-year-old sister how the web works and what is necessary to build a project since she is really interested in learning Software Development and I would like to teach her as much as posible, then the project was presented for my sister's science fair at her Middle School.</p>
            </div>
            <div className='proj--two-images-embassy'> 
                <div className='proj--image1'>
                    <p>Level 1</p>
                    <img src={GameLevel1} alt='homepage' className='proj---embassy-image' />
                </div>
                <div className='proj--image2'>
                    <p>Level 2</p>
                    <img src={GameLevel2} alt='homepage' className='proj---embassy-image' />
                </div>
            </div>
            <div className='proj--buttons-container'>
            <a href='https://github.com/Return0Zero/Valeria' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
            <a href='https://test-game-kaboom.netlify.app/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
               
            </div>
        </div>
    )
}

export default ProjGame;
