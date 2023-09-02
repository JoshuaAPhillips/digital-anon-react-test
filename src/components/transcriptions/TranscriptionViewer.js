import Construction from '../Construction';
import { useParams } from 'react-router-dom';
import NotFoundError from '../NotFoundError';

const TranscriptionViewer = ({ documentData }) => {
  const { page_id } = useParams();
  console.log(page_id)

  const matchingPage = documentData.find((document) => document.id === page_id);

  if (!page_id) {
    return <Construction page={"Transcriptions"} />
  } else if (!matchingPage) {
    return <NotFoundError />
  }

  return (
    <>
      <p>{matchingPage.title_full}</p>
      <Construction page={"Transcriptions - " + page_id} />
    </>
  );
};

export default TranscriptionViewer