import { React, useState } from 'react';
import './index.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
    const [letterClass] = useState('text-animate');  
    
    return (
      <>
      <div className='contact'>
        <div className="newsletter">
    <Form>
        <div className="contact_animation">
    <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            /></div>

<Form.Group className="form">        
     <Form.Label>Full Name</Form.Label>
        <Form.Control className="empty" size="lg" type="name" placeholder="Enter your Name"/>
      </Form.Group>
      <Form.Group  className="form">        
      <Form.Label>Email</Form.Label>
        <Form.Control  className="empty" size="lg" type="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="form">        
      <Form.Label>Phone</Form.Label>
        <Form.Control  className="empty"size="lg" type="phone"  id="inputdefault" placeholder="Enter Phone Number" />
      </Form.Group>

      <Form.Group className="form">
       <Form.Label>Message</Form.Label>
        <Form.Control  size="lg" as="textarea" rows={7} placeholder="Type your Message here,,,," className="textarea"/>
      </Form.Group >
      <Button className="button" variant="primary" type="submit" value="Send Message">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  
      </>
      
    )
  }
  
  export default Contact