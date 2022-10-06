import React from 'react';
import './skills--info.css';
import SkillsBg from '../../images/icons/Development-skill.svg';
import LeftBrain from '../../images/icons/left-dev-brain.svg';

const SkillsInfo = ({InfoImage, InfoTitle, InfoDescription, InfoTools, BgImage}) => {
    return (
        <div className='skills--bg-component'>
            <img src={LeftBrain} alt='left brain image' className='left-brain' />
            <div className='skills--info-component'>
                <img src={SkillsBg} alt='icon' className='skills--icon-component' />
                <h3 className='skills--title-component'>Web Development</h3>
                <p className='skills--p-component'>Coding is the bridge that allows the computer to understand the user and facilitates the way to build what we dream.</p>
                <p className='skills--p-component'>Dev Languages I have used in my projects:</p>
                <div className='skills--p-columns'>
                    <div className='skills--p-first-column'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                    </div>
                    <div className='skills--p-first-column'>
                        <p>Node js</p>
                        <p>Three js</p>
                        <p>Kaboom js</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SkillsInfo;
