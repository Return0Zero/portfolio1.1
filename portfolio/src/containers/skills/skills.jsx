import React from 'react';
import './skills.css';
import SkillsInfo from '../../components/skills--info/skills--ux-info';
import SkillsArtInfo from '../../components/skills--info/skills--info';

const skills = () => {
    return (
        <div className='skills-section'>
        <h1 className='main-title'>SKILLS</h1>
            <div className='skills--info-container'>
                <SkillsArtInfo />
                <SkillsInfo />
            </div>
        </div>
    )
}

export default skills;
