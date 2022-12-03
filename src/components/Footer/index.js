import React from 'react';
import './index.scss';
import { FaGithub,FaLinkedin, FaCodepen} from 'react-icons/fa';


function Footer() {

  return (
    <>
<div className="footer">

<div>
  <p className='rights'> © 2022 Santosh Karki. All rights reserved.</p>
  </div>

<div className="footer-container">

  <div className='flex2'>
  <a href="https://github.com/Santosh-Karki" target="_blank" rel="noreferrer"><FaGithub className='icon'/>
  </a>
  </div>

  <div className='flex2'>
  <a href="https://www.linkedin.com/in/santos-karki" target="_blank" rel="noreferrer"><FaLinkedin className='icon'/>
  </a>
  </div>

  <div className='flex2'>
  <a href="https://codepen.io/your-work/" target="_blank" rel="noreferrer"><FaCodepen className='icon'/>
  </a>
  </div>






  <div className='flex2'></div>
</div>

</div>
</>
  );
}

export default Footer;