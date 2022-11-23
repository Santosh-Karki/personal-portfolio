import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AnimatedLetters from '../AnimatedLetters';
import Santosh from '../../assets/images/santosh.jpg';
import FigureImage from 'react-bootstrap/FigureImage';


import './index.scss';

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['S', 'a', 'n', 't', 'o', 's', 'h']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e','l','o','p', 'e', 'r','.',]

 

  return (
    <div className='home'>
    <div className="flex-container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>i,</span>
            <br />
            <span className={letterClass}>I</span>
            <span className={letterClass}>'m </span>
            <span className={letterClass}>  </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / React Developer/ JavaScript Developer / UI/UX Designer</h2>
          <a href="Santosh_karki-CV.docx" download="Santosh_karki-CV.docx" >
          <Button className="resume" variant="outline-dark">Download CV</Button>
          </a>
        </div>  

        
        <div className="photo">
          <FigureImage
          className='santosh'
          alt="santosh photo"
          src={Santosh}/>
          </div>
          </div>
    
  
          </div>
  )
}

export default Home
