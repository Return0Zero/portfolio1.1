import React from 'react';
import './projects.css';
import ProjSilas from '../../components/proj--component/proj--silas';
import ProjEmbassy from '../../components/proj--component/proj--embassy';
import ProjGame from '../../components/proj--component/proj--game';
import ProjAffordable from '../../components/proj--component/proj--affordable-cleaning';
import ProjKnight from '../../components/proj--component/proj--knight';

const Projects = () => {
    return (
        <div className='projects--section' id='projectID'>
            <h1 className='main-title'>PROJECTS</h1>
            <div className='project--container'>
                <ProjAffordable />
                <ProjKnight />
                <ProjSilas />
                <ProjEmbassy />
                <ProjGame />
            </div>
        </div>
    )
}

export default Projects;
