import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Construction from '../components/Construction';

const TranscriptionView = ({ page }) => {
  return (
    <>
      <Construction page={"Transcriptions"} />
    </>
  )

}

export default TranscriptionView