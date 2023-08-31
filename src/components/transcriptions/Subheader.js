import { Link } from 'react-router-dom';
import { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Subheader = ({ toggleSidebar }) => {

  const handleClick = () => {
    toggleSidebar();
    console.log('Clicked!')
  };

  return (
    <>
      <Navbar fluid>
        <Button onClick={handleClick}>View</Button>
      </Navbar>
    </>
  )
}

export default Subheader