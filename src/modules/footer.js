import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
        <Container>
          <Navbar.Text>Copyright details here.</Navbar.Text>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer