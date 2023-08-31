import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styles from './Subheader.module.css'

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>

            {/* hamburger menu button */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            {/* buttons */}
            <ButtonGroup>
              <Button variant='outline-danger'>Typos</Button>
              <Button variant='outline-success'>Additions</Button>
              <Button variant='outline-dark'><s>Deletions</s></Button>
              <Button variant="outline-primary">Annotations</Button>
            </ButtonGroup>

            {/* offcanvas menu */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Documents
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Notebook Fragments" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action1">M.1-8-1</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-2</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-3</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-4</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-5</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-6</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-7</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-8</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-9</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.1-8-10</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="'Anon' Fragments"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action1">M.45</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.46</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.47</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.48</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.49</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.50</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.51</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.52</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.53</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-1</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-2</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-3</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-4</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-5</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-6</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-7</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-8</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-9</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-10</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.54-11</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="'The Reader' Fragments" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action1">M.108</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.109</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.110</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.111-1</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.111-2</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.111-3</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.112-1</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.112-2</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.112-3</NavDropdown.Item>
                    <NavDropdown.Item href="#action1">M.113</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;