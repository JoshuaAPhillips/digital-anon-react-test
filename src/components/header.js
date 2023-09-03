import { Link } from 'react-router-dom';

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
          <Navbar.Brand
            as={Link} to="/" 
            className={styles.brand}>
              {/*<img src={Logo} className={styles.logo} height="30"/>*/} The Digital Anon
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="The Documents">
                <NavDropdown.Item as={Link} to="/facsimiles">Facsimiles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/transcriptions">Transcriptions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/annotations">Anonapaedia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/more-documents">More...</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About">
                <NavDropdown.Item as={Link} to="/about-documents">About the Documents</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-digital-anon">About the Project</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/how-to">How-to</NavDropdown.Item>
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