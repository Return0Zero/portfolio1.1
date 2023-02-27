import React from 'react';
import './projects.css';

import ProjSilas from '../../components/proj--component/proj--silas';
import ProjEmbassy from '../../components/proj--component/proj--embassy';
import ProjGame from '../../components/proj--component/proj--game';
import ProjAffordable from '../../components/proj--component/proj--affordable-cleaning';
import ProjKnight from '../../components/proj--component/proj--knight';

import ProjJsToDo from '../../components/proj--component/proj--js-to-do';


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
            
            <h1 className='main-title'>JS PROJECTS</h1>
            <div className='project--container'>
                <ProjJsToDo />
            </div>
        </div>
    )
}

export default Projects;
