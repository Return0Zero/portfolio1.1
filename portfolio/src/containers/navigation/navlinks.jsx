import './navlinks.css';

import AboutMeIcon from '../../images/icons/about-me.svg';
import ProjectsIcon from '../../images/icons/programming.svg';
import Arrow from '../../images/icons/arrow.svg';


function NavLinks() {

  return (
    <div className="navlinks-container">
      <div className='navigation--separation-bar'></div>
      <div className='navigation--container'>
          <a href='#aboutID' className='navigation--icon'>
              <img src={AboutMeIcon} alt='About me icon'/>
              <p className='navigation-text'>About</p>
          </a>
      </div>
      <div className='navigation--separation-bar'></div>
      <div className='navigation--container'>
          <a href='#projectID' className='navigation--icon'>
              <img src={ProjectsIcon} alt='Projects icon'/>
              <p className='navigation-text'>Projects</p>
          </a>
      </div>
      <div className='navigation--separation-bar-second'></div>
      <a href='#' className='navlinks--arrow'>
        <img src={Arrow} alt='Arrow ' className='navlinks--arrow'/>
      </a>
    </div>
  );
}

export default NavLinks;
