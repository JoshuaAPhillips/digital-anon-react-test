import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Subheader from './Subheader';
import Sidebar from './Sidebar';

const TranscriptionNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    console.log('Opening sidebar!')
  }

  const handleClose = () => {
    setSidebarOpen(false)
    console.log('Closing sidebar!')
  }

  return(
    <>
      <Subheader toggleSidebar={toggleSidebar} />
      <Sidebar show={sidebarOpen} handleClose={handleClose} />
      <Outlet />
    </>
  )
}

export default TranscriptionNav