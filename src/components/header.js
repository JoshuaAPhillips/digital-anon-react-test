import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../resources/images/da-logo-test.png'
import styles from './header.module.css'

const Header = () => {

  return (
    <>
      <Navbar fluid expand="lg" className={styles.header} sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
              <img src={Logo} className="d-inline-block align-top" height="30"/> The Digital Anon
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="The Documents">
                <NavDropdown.Item href="#link">Facsimiles</NavDropdown.Item>
                <NavDropdown.Item href="#link">Transcriptions</NavDropdown.Item>
                <NavDropdown.Item href="#link">Anonapaedia</NavDropdown.Item>
                <NavDropdown.Item href="#link">More...</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About">
                <NavDropdown.Item href="#link">About the Documents</NavDropdown.Item>
                <NavDropdown.Item href="#link">About the Project</NavDropdown.Item>
                <NavDropdown.Item href="#link">How-to</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control 
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                />
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>

  );
}

export default Header