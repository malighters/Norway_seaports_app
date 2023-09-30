import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export const MainInfo = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Image 
            src="https://fastly.picsum.photos/id/617/900/400.jpg?hmac=Mmjow-H3FnKsSD_GG4Jx7S_Vqru7wViNxV3lWy07x50"
            fluid
            rounded
          />
        </Col>
        <Col sm={5}>
          <h1 className='font-weight-light'>
            Seaport in Norway
          </h1>
          <p>
            Norway boasts a stunning coastline that stretches for over 83,000 kilometers, dotted with numerous seaports that play a vital role in the economy and culture of country. These seaports are not only gateways to the world but also serve as picturesque hubs for trade, tourism, and maritime activities. Let us explore a few notable seaports in Norway.
          </p>
          <Button variant='primary' href='https://adnavem.com/world/northern-europe/norway/ports'>
            More info
          </Button>
        </Col>
      </Row>
    </Container>
  )
}