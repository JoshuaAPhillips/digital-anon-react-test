import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Construction from '../components/Construction';
import Subheader from '../components/transcriptions/Subheader';
import TranscriptionViewer from '../components/transcriptions/TranscriptionViewer';

import documentData from '../resources/data/document_data.js'

const TranscriptionView = ({ page }) => {

  const page_id = useParams()

  return (
    <>
      <Subheader documentData={documentData} />
      <TranscriptionViewer documentData={documentData} />
    </>
  )
}

export default TranscriptionView