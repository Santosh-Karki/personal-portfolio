import { React, useState } from 'react';
import './index.scss';
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
    const [letterClass] = useState('text-animate');  
 

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_ID)
        .then((result) => {
            console.log(result.text);
            alert("Message has been sent. You will get contacted within 24 hours. Thank you");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };




    
    return (
      <>
      <div className='contact'>
        <div className="newsletter">
    <Form onSubmit={sendEmail}>
        <div className="contact_animation">
    <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            /></div>

<Form.Group className="form">        
     <Form.Label>Full Name</Form.Label>
        <Form.Control className="empty" size="lg" name="name" placeholder="Enter your Name"/>
      </Form.Group>
      <Form.Group  className="form">        
      <Form.Label>Email</Form.Label>
        <Form.Control  className="empty" size="lg" name="email" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="form">        
      <Form.Label>Phone</Form.Label>
        <Form.Control  className="empty"size="lg" name="phone"  id="inputdefault" placeholder="Enter Phone Number" />
      </Form.Group>

      <Form.Group className="form">
       <Form.Label>Message</Form.Label>
        <Form.Control  size="lg" as="textarea" rows={7}  name="message" placeholder="Type your Message here,,,," className="textarea"/>
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