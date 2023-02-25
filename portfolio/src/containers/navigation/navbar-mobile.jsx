import './navbar-mobile.css';
import {useState} from 'react'
import NavLinks from './navlinks'

import LogoDbWf from '../../images/icons/logo-DarkB-WhiteF.svg';
import LogoWbDf from '../../images/icons/logo-whiteb-solidf.svg';


function NavbarMobile() {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = <img src={LogoDbWf} alt='Dark Menu' className='hamburger-menu' onClick={() => setOpen(!open)}/>

  const closeIcon =  <img src={LogoWbDf} alt='White Menu' className='close-menu' onClick={() => setOpen(!open)}/>


  return (
    <div className="navbar-mobile-container">
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks></NavLinks>}       
    </div>
  );
}

export default NavbarMobile;
