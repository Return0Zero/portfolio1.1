import React from 'react';
import './proj--affordable-cleaning.css';
import AffordableLogo from '../../images/projects/affordable/horizontal-logo.png';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import AffordableHeader from '../../images/projects/affordable/affordable.png'


const ProjAffordable = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={AffordableLogo} alt='Reliable and Affordable Logo' className='affordable-logo' />
            </div>
            <div className='proj--content'>
                <p>Reliable & Affordable Cleaning LLC is a North Carolina cleaning business that was looking to improve its online presence and needed me to build them a website, and social media accounts as well as online advertisement to help them improve the business. In the first month, I was able to bring them enough customers to fill 100% of their monthly capacity and they are currently looking for ways to expand their business and keep growing.</p>
            </div>
            <div className='proj--one-images-component'> 
                <div className='proj--image1'>
                    <img src={AffordableHeader} alt='homepage' className='proj---one-image-component' />
                </div>
            </div>
            <div className='proj--buttons-container'>
                <a href='https://github.com/Return0Zero/cleaningllc' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
                <a href='https://reliableandaffordablecleaning.com/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
            </div>
        </div>
    )
}

export default ProjAffordable;
