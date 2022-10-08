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
                <p>Text-to-Speech application made for the Embassy of Honduras in Washington DC. During this project I worked closely with the Ambassador of Honduras and The General Consul of Honduras to develop this project to be used in the entire consular network of Honduras in The United States of America as an emergency method to maintain order during the COVID 19 Pandemic facilitating the communication between the Embassy Agents and the regular public and that way not only did the application was able to improve the workflow, but it was able to free one of the agents needed to call the Honduran Citizens through the building and they were able to return to their regular responsibilities improving even further the workflow that it was placed to adhere to the Social Distancing Guidelines.</p>
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
