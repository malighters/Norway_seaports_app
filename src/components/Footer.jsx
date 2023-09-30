import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className='py-3 my-3'>
      <Container className='px-4'>
        <p className='text-center'>
          Web project made by using React & Bootstrap <br/>
          Copyright &copy; Seaports site 2023 
        </p>
      </Container>
    </footer>
  )
}