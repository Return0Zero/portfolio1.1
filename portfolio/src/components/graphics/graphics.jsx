import React from 'react';
import './graphics.css';
import Medals from '../../images/blender-designs/medals.png';

const Graphics = () => {
    return (
        <div>
            <img src={Medals} alt="medals" className='medals'/>
        </div>
    )
}

export default Graphics;
