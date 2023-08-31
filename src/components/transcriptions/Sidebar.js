import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { toggleSidebar, handleClose } from './TranscriptionNav';

const Sidebar = ({ show, handleClose }) => {

  return(
  <>
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
    
    </Offcanvas>
  </>
  )
}

export default Sidebar