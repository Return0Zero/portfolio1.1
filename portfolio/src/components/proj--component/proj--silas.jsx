import React from 'react';
import './proj--silas.css';
import SilasLogo from '../../images/projects/silas/logo.png';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import HomeBefore from '../../images/projects/silas/home-before.png'
import HomeAfter from '../../images/projects/silas/home-after.png'


const ProjSilas = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={SilasLogo} alt='Silas Landscaping Logo' className='silas-logo' />
            </div>
            <div className='proj--content'>
                <p>Silas Landscaping is a Family-Owned lawn care & cleaning company based in the DMV area (Washington D.C., Virginia, and Maryland) and my role in this project was to re-design and develop Silas Landscaping website to give it a fresh look to improve how customers see the company as well as to maintain a clean and professional image.</p>
            </div>
            <div className='proj--two-images'> 
                <div className='proj--image1'>
                    <p>Before</p>
                    <img src={HomeBefore} alt='homepage' className='proj--image' />
                </div>
                <div className='proj--image2'>
                    <p>After</p>
                    <img src={HomeAfter} alt='homepage' className='proj--image' />
                </div>
            </div>
            <div className='proj--buttons-container'>
            <a href='https://github.com/Return0Zero/silaslandscaping.github.io' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
            <a href='https://silaslandscaping.netlify.app/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
               
            </div>
        </div>
    )
}

export default ProjSilas;
