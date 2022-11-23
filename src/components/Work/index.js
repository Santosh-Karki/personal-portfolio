import './index.scss';
import Santosh from '../../assets/images/santosh.jpg';
import portfolio from '../../assets/images/portfolio.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Work = () => {
  return (
    <>

    <div className='project'>
    <div className="project_title">
      <h1> PROJECTS</h1>
      </div>
     
     

    <div className="project_container">
      <div className="projects">
    <Card  >
      <Card.Img variant="top" src={portfolio} />
      <Card.Body>
        <Card.Title className="project_topic">Personal Web Portfolio</Card.Title>
        <Card.Text>
        A react-based responsive portfolio that contains information about
        my knowledge, skills, and experiences, along with a contact form.
        
        </Card.Text>
        <Button className="project_button" variant="primary">Find more...</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={Santosh} />
      <Card.Body>
        <Card.Title className="project_topic">Personal Web Portfolio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        
        </Card.Text>
        <Button className="project_button" variant="primary">Find more...</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={Santosh} />
      <Card.Body>
        <Card.Title className="project_topic">Personal Web Portfolio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        
        </Card.Text>
        <Button className="project_button" variant="primary">Find more...</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={Santosh} />
      <Card.Body>
        <Card.Title className="project_topic">Personal Web Portfolio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        
        </Card.Text>
        <Button className="project_button" variant="primary">Find more...</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Work
