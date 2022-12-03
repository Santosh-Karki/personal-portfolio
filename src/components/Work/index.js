import './index.scss';
import Santosh from '../../assets/images/santosh.jpg';
import Youtube from '../../assets/images/youtube.png';
import Cart from '../../assets/images/cart.png';
import todo from '../../assets/images/todo.png';
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
        <Card.Title className="project_topic">Personal-Web Portfolio</Card.Title>
        <Card.Text>
        A react-based responsive portfolio that contains information about
        my knowledge, skills, and experiences, along with a contact form.
        
        </Card.Text>
        <a href="https://github.com/Santosh-Karki/personal-portfolio" target="_blank" rel="noreferrer">
        <Button className="project_button" variant="primary">Find more...</Button>
        </a>
      </Card.Body>
    </Card>
    </div>

    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={Cart} />
      <Card.Body>
        <Card.Title className="project_topic">Sport Shopping Club</Card.Title>
        <Card.Text>
        Fully functional React E-commerce website with the functionality of adding and removing shopping items from the shopping list. 
        Every detail of the shopping items or shopping list got updated with any of these changes. 
        
        </Card.Text>
        <a href="https://github.com/Santosh-Karki/shopping-cart" target="_blank" rel="noreferrer">
        <Button className="project_button" variant="primary">Find more...</Button>
        </a>
      </Card.Body>
    </Card>
    </div>

    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={Youtube} />
      <Card.Body>
        <Card.Title className="project_topic">Youtube Clone</Card.Title>
        <Card.Text>
        Created Youtube Clone using React.
         Using React functional components, Hooks, and media queries CSS, 
         the app is fully responsive and acts like a YouTube. 
        
        </Card.Text>
        <a href="https://github.com/Santosh-Karki/Youtube-clone" target="_blank" rel="noreferrer">
        <Button className="project_button" variant="primary">Find more...</Button>
        </a>
      </Card.Body>
    </Card>
    </div>


    <div className="projects">
    <Card  >
      <Card.Img variant="top" src={todo} />
      <Card.Body>
        <Card.Title className="project_topic">ToDo List</Card.Title>
        <Card.Text>
        It's the ToDo List App, where you can create and note down the list you want to do. 
        I have used React hooks, and components to make this web app.  
        
        </Card.Text>
        <a href="https://github.com/Santosh-Karki/ToDo-list" target="_blank" rel="noreferrer">
        <Button className="project_button" variant="primary">Find more...</Button>
        </a>
      </Card.Body>
    </Card>
    </div>

    </div>
    </div>
    </>
    
  )
}

export default Work
