import React from 'react';
import './projects.css';
import ProjectsTitle from '../../images/titles/projects.svg';
import ProjSilas from '../../components/proj--component/proj--silas';
import ProjEmbassy from '../../components/proj--component/proj--embassy';
import ProjGame from '../../components/proj--component/proj--game';
import ProjMusic from '../../components/proj--component/proj--green-gold-music';
import Asset2 from '../../images/background-designs/Asset2.svg';

const Projects = () => {
    return (
        <div className='projects--section' id='projectID'>
            <div className='asset2-container'>                    
                <img src={Asset2} alt='shape2' className='asset2' />
            </div>
            <img src={ProjectsTitle} alt='projects title' className='project--title'/>
            <div className='project--container'>
                <ProjSilas />
                <ProjEmbassy />
                <ProjGame />
                <ProjMusic />
            </div>
        </div>
    )
}

export default Projects;
