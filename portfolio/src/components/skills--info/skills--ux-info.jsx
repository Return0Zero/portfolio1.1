import React from 'react';
import './skills--ux-info.css';
import SkillsArtBg from '../../images/icons/Ux-skill.svg';
import RightBrain from '../../images/icons/right-art-brain.svg';

const SkillsArtInfo = ({InfoImage, InfoTitle, InfoDescription, InfoTools, BgImage}) => {
    return (
        <div className='skills--art-bg-component'>
                    <img src={SkillsArtBg} alt='icon' className='skills--icon-component' />
                    <h3 className='skills--title-component'>UX/UI Design</h3>
                    <p className='skills--p-component'>I help businesses design their brand identity, websites, logo, business cards and graphic design for advertising.</p>
                    <p className='skills--p-component'>Design tools I have used in my projects:</p>
                <div className='skills--p-columns'>
                    <div className='skills--p-first-column'>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                        <p>Adobe Xd</p>
                    </div>
                    <div className='skills--p-first-column'>
                        <p>Figma</p>
                        <p>Blender</p>
                        <p>SketchUp</p>
                    </div>
                </div>
            
        </div>
    )
}

export default SkillsArtInfo;
