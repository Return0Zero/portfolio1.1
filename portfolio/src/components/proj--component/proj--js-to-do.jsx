import React from 'react';
import './proj--knight.css';
import JsToDoLogo from '../../images/jsprojects/todo-logo.png';
import JsToDoImage from '../../images/jsprojects/todo-header.png'
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';



const ProjJsToDo = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={JsToDoLogo} alt='Embassy of Honduras Logo' className='knight-logo' />
                <h1 className='proj--game-title'>To-Do App</h1>
            </div>
            <div className='proj--js-content'>
                <p>This To-Do app is built using the MERN stack and features a sleek, neon-colored UI that is both modern and eye-catching. The app allows users to easily create, edit, and manage their tasks with a simple yet beautiful interface.</p>
            </div>
            <div className='proj--one-images-component'> 
                <div className='proj--image1'>
                    <img src={JsToDoImage} alt='homepage' className='proj---one-image-component' />
                </div>
            </div>
            <div className='proj--buttons-container'>
            <a href='https://github.com/Return0Zero/todo-app' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
            <a href='https://to-do-app-return-zero.netlify.app/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
               
            </div>
        </div>
    )
}

export default ProjJsToDo;
