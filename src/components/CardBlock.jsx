import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Port } from './Port';
import { data } from '../../data';
import { Container } from 'react-bootstrap'

export const CardBlock = () => {
  return (
    <Container>
      <Row sm={4} s={1} className="g-2">
      {data.seaports.map(el => (
        <Col key={el.id}>
          <Port 
              key={el.id} 
              name={el.name} 
              location ={el.location} 
              description={el.description} 
              link={el.link}
            />
        </Col> ))}
      </Row>
    </Container>
    
  )
}