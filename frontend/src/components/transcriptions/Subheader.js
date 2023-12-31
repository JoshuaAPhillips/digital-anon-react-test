import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link } from 'react-router-dom';

import TranscriptionViewer from './TranscriptionViewer'

function Subheader({ documentData }) {

    // State for annotation pane and transcription options

    const [showAnnotations, setShowAnnotations] = useState(false);
    const [showTypos, setShowTypos] = useState(false);
    const [showAdditions, setShowAdditions] = useState(false);
    const [showDeletions, setShowDeletions] = useState(false);
  
    // Functions for annotation pane
  
    const handleShowAnnotations = () => {
      setShowAnnotations(!showAnnotations)
      console.log('Opening annotations pane!')
    }

  // Routes to transcription pages

  const notebookList = documentData.filter(document => document.category === 'notebook');
  const anonList = documentData.filter(document => document.category === 'anon');
  const m54List = documentData.filter(document => document.category === 'm54_subfragment');
  const readerList = documentData.filter(document => document.category === 'reader');

  const notebookRoutes = notebookList.map((document) => 
    <NavDropdown.Item as={Link} key={document.id} to={`transcriptions/${document.id}`}>{document.title_short}</NavDropdown.Item>
  );
  const anonRoutes = anonList.map((document) => 
    <NavDropdown.Item as={Link} key={document.id} to={`transcriptions/${document.id}`}>{document.title_short}</NavDropdown.Item>
  );
  const m54Routes = m54List.map((document) =>
    <NavDropdown.Item as={Link} key={document.id} to={`transcriptions/${document.id}`}>{document.title_short}</NavDropdown.Item>
  );

  const readerRoutes = readerList.map((document) =>
    <NavDropdown.Item as={Link} key={document.id} to={`transcriptions/${document.id}`}>{document.title_short}</NavDropdown.Item> 
  );

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>

            {/* hamburger menu button */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            {/* option buttons */}
            <ButtonGroup>
              <Button variant='outline-danger'>Typos</Button>
              <Button variant='outline-success'>Additions</Button>
              <Button variant='outline-dark'><s>Deletions</s></Button>
              <Button variant='outline-primary'
                onClick={handleShowAnnotations}
                active={!showAnnotations}
              >Annotations</Button>
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
                    {notebookRoutes}
                  </NavDropdown>

                  <NavDropdown
                    title="'Anon' Fragments"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {anonRoutes}
                  </NavDropdown>

                  <NavDropdown title="'M.54' Subfragments" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {m54Routes}
                  </NavDropdown>

                  <NavDropdown title="'The Reader' Fragments" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {readerRoutes}
                  </NavDropdown>
                  
                  <Nav.Link as={Link} to="/transcriptions">Transcriptions Home</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <TranscriptionViewer documentData={documentData} showAnnotations={showAnnotations} showTypos={showTypos} showAdditions={showAdditions} showDeletions={showDeletions} />
    </>
  );
}

export default Subheader;