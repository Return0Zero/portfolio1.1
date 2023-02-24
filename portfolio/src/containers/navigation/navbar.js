import './navbar.css';
import LogoHorizontal from '../../images/horizontal-logo.png';
import NavbarMobile from './navbar-mobile';


function Navbar() {
  return (
    <div className="navbar-max-width">
      <div className="navbar-container">
        <a href="#" className='link--title-logo'><img src={LogoHorizontal} alt='logo' className='logo'/></a>
        <div className='navbar-container-links'>
          <a href='#servicesID' className='link-services'><p>Services</p></a>
          <a href='#contactID' className='link-contact'><p>Contact Us</p></a>
        </div>
      </div>
      <NavbarMobile className='navbar-mobile'></NavbarMobile>
    </div>
  );
}

export default Navbar;
