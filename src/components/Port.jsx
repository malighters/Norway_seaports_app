/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

export const Port = ({ name, location, description, link }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ link } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>{ description }</Card.Text>
        <Card.Footer>{ location }</Card.Footer>
      </Card.Body>
    </Card>
  )
}