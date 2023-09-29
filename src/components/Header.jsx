import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Seaports</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://www.worldportsource.com/ports/NOR.php">Map</Nav.Link>
              <Nav.Link href="http://www.worldportsource.com/ports/index/NOR.php">Index</Nav.Link>
              <Nav.Link href="https://www.sdir.no/globalassets/sjofartsdirektoratet/fartoy-og-sjofolk---dokumenter/arbeids--og-levevilkar---dokumenter/guide-to-norwegian-ports-2012-web.pdf">Guide</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </header>
  )
}