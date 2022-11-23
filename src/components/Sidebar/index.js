import './index.scss'
import {Link} from 'react-scroll'
import { useState } from 'react'
import LogoS from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faSuitcase} from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  return (
    <div className="nav-bar">
   <a href='/' className='logo'>
      <img src={LogoS} alt='logo' />
      </a>        
          
       
      <nav className={click ? "nav-menu active" : "nav-menu"}>
          
          <Link className="home-link" to="home" spy={true} smooth={true} offset={-90} duration={150} onClick={closeMenu}>
          <FontAwesomeIcon className="fahome" icon={faHome} color="#4d4d4e" />
          </Link>
      
          <Link className="about-link" to="about" spy={true} smooth={true} offset={-80} duration={150} onClick={closeMenu}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </Link>

          <Link   className="work-link" to="project" spy={true} smooth={true} offset={-70} duration={150} onClick={closeMenu}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </Link>


          <Link className="contact-link" to="contact" spy={true} smooth={true} offset={-50} duration={150} onClick={closeMenu}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </Link>

        
      </nav>
    </div>
  )
}

export default Sidebar
