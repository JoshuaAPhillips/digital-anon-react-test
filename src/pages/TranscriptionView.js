import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Construction from '../components/Construction';
import Subheader from '../components/transcriptions/Subheader';

const TranscriptionView = ({ page }) => {

  return (
    <>
      <Subheader />
      <Construction page={"Transcriptions"} />
    </>
  )
}

export default TranscriptionView