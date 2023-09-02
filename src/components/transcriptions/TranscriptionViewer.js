import Construction from '../Construction';
import { useParams } from 'react-router-dom';

const TranscriptionViewer = ({ documentData, page }) => {

  const { page_id } = useParams()

  const matchingPage = documentData.find((document) => document.id === page_id)

  return (
    <>
      <p>{matchingPage.title_full}</p>
      <Construction page={"Transcriptions - " + page_id} />
    </>
  )
}

export default TranscriptionViewer