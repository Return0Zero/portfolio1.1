import React from 'react';
import './contact.css';
import Form from '../../components/form/form';

//contact me images

import Phone2 from '../../images/icons/contact-me-icons/phone.svg'
import Phone from '../../images/icons/contact-me-icons/phone2.svg'
import Linkedin2 from '../../images/icons/contact-me-icons/linkedin.svg'
import Linkedin from '../../images/icons/contact-me-icons/linkedin2.svg'
import Github2 from '../../images/icons/contact-me-icons/github.svg'
import Github from '../../images/icons/contact-me-icons/github2.svg'
import Youtube2 from '../../images/icons/contact-me-icons/youtube.svg'
import Youtube from '../../images/icons/contact-me-icons/youtube2.svg'
import Facebook2 from '../../images/icons/contact-me-icons/facebook.svg'
import Facebook from '../../images/icons/contact-me-icons/facebook2.svg'
import Instagram2 from '../../images/icons/contact-me-icons/instagram.svg'
import Instagram from '../../images/icons/contact-me-icons/instagram2.svg'

const Contact = () => {
    return (
        <div className='contact--section' id='contactID'>
            <h1 className='main-title'>CONTACT ME</h1>
            <div className='contact--info-container'>
                
                <div className='contact--info'>
                        <div className='contact--contact'>
                            <h3 className='contact--h3'>Reach Me Out:</h3>
                            <div className='contact--contact-icon-container'>
                                <a href='https://www.linkedin.com/in/jorge-cruz-a22484216/' target="_blank" className='contact-second-container'>
                                    <img src={Linkedin} alt="linkedin" className='linkedin img-front'/>
                                    <img src={Linkedin2} alt="linkedin2" className='linkedin2 img-back'/>
                                </a>
                                <a href='https://github.com/Return0Zero' target="_blank" className='contact-third-container'>
                                    <img src={Github} alt="github" className='github img-front'/>
                                    <img src={Github2} alt="github2" className='github2 img-back'/>
                                </a>
                            </div>
                        </div>
                        <div className='contact--social'>
                            <h3 className='contact--h3'>Follow Me:</h3>
                            <div className='contact--social-icon-container'>
                                <a href='https://www.youtube.com/channel/UCOq84jYjG1kuE8lHHYuUfvA' target="_blank" className='social-first-container'>
                                    <img src={Youtube} alt="youtube" className='youtube img-front'/>
                                    <img src={Youtube2} alt="youtube2" className='youtube2 img-back'/>
                                </a>
                                <a href='https://www.facebook.com/ReturnZero-105368945341957' target="_blank" className='social-second-container'>
                                    <img src={Facebook} alt="facebook" className='facebook img-front'/>
                                    <img src={Facebook2} alt="facebook2" className='facebook2 img-back'/>
                                </a>
                                <a href='https://www.instagram.com/returnzero_dev/' target="_blank" className='social-third-container'>
                                    <img src={Instagram} alt="instagram" className='instagram img-front'/>
                                    <img src={Instagram2} alt="instagram2" className='instagram2 img-back'/>
                                </a>
                            </div>
                        </div>
                </div>
                <div className='contact--form'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact;
