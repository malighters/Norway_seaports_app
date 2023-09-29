import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap'

function App() {

  return (
    <>
     <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </header>

     <main>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={6}>
            <Image 
              src="https://fastly.picsum.photos/id/617/900/400.jpg?hmac=Mmjow-H3FnKsSD_GG4Jx7S_Vqru7wViNxV3lWy07x50"
              fluid
              rounded
              className=''
            />
          </Col>
          <Col sm={5}>
            <h1 className='font-weight-light'>
              Seaport in Norway
            </h1>
            <p>
              Norway boasts a stunning coastline that stretches for over 83,000 kilometers, dotted with numerous seaports that play a vital role in the country's economy and culture. These seaports are not only gateways to the world but also serve as picturesque hubs for trade, tourism, and maritime activities. Let's explore a few notable seaports in Norway:
            </p>
            <Button variant='primary' href=''>
              More info
            </Button>
          </Col>
        </Row>
      </Container>
     </main>
    </>
  )
}

export default App
