import React from 'react';
import './about.css';
import { Graphics } from '../../components';
import Wtmp from '../../images/titles/welcome-to-my-portfolio.svg';
import Triangles from '../../images/background-designs/triangles.svg';



const About = () => {
    return (
        <div className='about--section' id='aboutID'>
            <h1 className='main-title'>WELCOME</h1>
            <h1 className='main-title'>TO MY PORTFOLIO</h1>
            <div className='triangles-container'>
                <img src={Triangles} alt='triangle' className='triangles first-triangles' />
                <img src={Triangles} alt='triangle' className='triangles second-triangles' />
            </div>
            <div className='about--texts'>
                <p>My name is Jorge Cruz and I am a Web Developer in Wheaton, Maryland.</p>
                <p>Return Zero is my personal brand and portfolio, I am a Web Developer whos goal is to create amazing websites and web application utilizing the latest technologies to ensure high customer satisfaction as well as maintaining high standards in every aspect of your project.</p>
                <p>I have a huge passion for Web Development and I love how it can satisfy my analytical side as much as my creative side, I can design interfaces focusing on what the user might need to do to make it comfortable to interact with as well as building that interface and make it fully responsive while maintaining best practices.</p>
                <p>"Return Zero" was born after my first experience with programming where a friend of mine introduced me to the programming language C++ as a small introduction to the IT world, even though I later decided to become a Front End developer and focus on JavaScript I took a like of the Return Statement "return (0)" meaning that a program has been executed without errors and since that moment I took it as my Artistic Name(also utilized as my video games' nickname).</p>
            </div>
            <Graphics className="graphics"/>
            <div className='about--quote'> 
                <p className='quote-main'>"The future is not something we enter. The future is something we create."</p>
                <p>—Leonard I. Sweet</p>
            </div>
        </div>
        
    )
}

export default About;
