import { useEffect, useState } from 'react';
import './index.scss';
import Santosh from '../../assets/images/santosh.jpg';
import HTML from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import github from '../../assets/images/github.png';
import bootstrap from '../../assets/images/bootstrap.png';
import jira from '../../assets/images/jira.png';
import api from '../../assets/images/api.png';
import mysql from '../../assets/images/mysql.png';
import XD from '../../assets/images/xd.png';
import react from '../../assets/images/react.png';
import Card from 'react-bootstrap/Card';


const About = () => {

  return (
    <>
      <div className="about">
      <div className="about_container">


      <div>
          
          <Card.Img className='about-photo' variant="top" src={Santosh} />
         </div>


      <div className='bio'>
          <h1>
            ABOUT ME
          </h1><br></br>
         
          <p>
         <br></br>

         I am a resilient, innovative React Developer with a demonstrated history of working in the information technology and services industry. <br></br><br></br>
         I am a passionate freelancer bringing you programming and design from the future. 
         I am well organised, able to solve problems and an independent worker who pays close attention to details. 
         I am experienced in developing web applications, including complete front-end design. <br></br><br></br>
         I help companies to get the best interactive web designs and websites. 
         I am interested in the entire front-end spectrum and working on ambitious projects with positive people. 
          </p>
          </div>
          
          </div>
          <div className="skill_container">
          <h1 className="skills"> SKILLS </h1>
          <div className='skill'>
           

  <div>
  <Card className='card'>
      <Card.Img  className="html" variant="top" src={HTML} />
      <Card.Body>
        <Card.Title className=" title"><b>HTML</b></Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={css} />
      <Card.Body>
        <Card.Title className=" title"><b>CSS</b></Card.Title>
      </Card.Body>
    </Card>
         
  </div>
  
  <div>
  <Card className='card'>
      <Card.Img  className="html" variant="top" src={js} />
      <Card.Body>
        <Card.Title className=" title"><b>JAVASCRIPT</b></Card.Title>
      </Card.Body>
    </Card>
    </div> 

    <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={react} />
      <Card.Body>
        <Card.Title className=" title"><b>REACT</b></Card.Title>
      </Card.Body>
    </Card>
         </div>

         <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={bootstrap} />
      <Card.Body>
        <Card.Title className=" title"><b>BOOTSTRAP</b></Card.Title>
      </Card.Body>
    </Card>
         </div>
    
       <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={github} />
      <Card.Body>
        <Card.Title className=" title"><b>GITHUB</b></Card.Title>
      </Card.Body>
    </Card>
         </div>

         <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={jira} />
      <Card.Body>
        <Card.Title className=" title"><b>JIRA</b></Card.Title>
      </Card.Body>
    </Card>
         </div>

       

         <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={api} />
      <Card.Body>
        <Card.Title className=" title"><b>RESTful API</b></Card.Title>
      </Card.Body>
    </Card>
         </div>

         <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={mysql} />
      <Card.Body>
        <Card.Title className=" title"><b>MYSQL</b></Card.Title>
      </Card.Body>
    </Card>
         </div>

         <div>
      <Card className='card'>
      <Card.Img  className="html" variant="top" src={XD} />
      <Card.Body>
        <Card.Title className=" title"><b>ADOBE XD</b></Card.Title>
      </Card.Body>
    </Card>
    </div>
         </div>  
         </div>

    </div>
   
    </>
  )
}

export default About
