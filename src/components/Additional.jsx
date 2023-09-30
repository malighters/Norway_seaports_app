/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Port } from './Port';

export const Additional = ({ seaports }) => {
  return (
    <Container>
      <Row sm={4} s={1} className="g-2">
      { seaports.map(el => (
        <Col key={el.id}>
          <Port 
              key={el.id} 
              name={el.name} 
              location ={el.location} 
              description={el.description} 
              link={el.link}
            />
        </Col> )) }
      </Row>
    </Container>
  )
}