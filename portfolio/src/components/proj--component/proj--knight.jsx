import React from 'react';
import './proj--knight.css';
import KnightLogo from '../../images/projects/knight/logo-dark-horizontal.png';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import KnightHeader from '../../images/projects/knight/knight.png'


const ProjKnight = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={KnightLogo} alt='Embassy of Honduras Logo' className='knight-logo' />
            </div>
            <div className='proj--content'>
                <p>Knight Multiservices is a multiservice company that focuses on landscaping, and commercial and residential cleaning based in Maryland. My role in this project was to design a modern brand identity that includes a website, business card, and social media advertisement in order to improve their social media presence.</p>
            </div>
            <div className='proj--one-images-component'> 
                <div className='proj--image1'>
                    <img src={KnightHeader} alt='homepage' className='proj---one-image-component' />
                </div>
            </div>
            <div className='proj--buttons-container'>
            <a href='https://github.com/Return0Zero/backupknight' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
            <a href='http://knightmultiservice.com/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
               
            </div>
        </div>
    )
}

export default ProjKnight;
