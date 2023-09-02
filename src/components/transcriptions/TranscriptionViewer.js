import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundError from '../NotFoundError';
import Construction from '../Construction';

const TranscriptionViewer = ({ documentData }) => {
  const { page_id } = useParams();

  const matchingPage = documentData.find((document) => document.id === page_id);
  const matchingPageUri = matchingPage ? matchingPage.transcription_html_uri : null;
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    if (matchingPage && matchingPageUri) {
      fetch(matchingPageUri)
        .then(response => response.text())
        .then(html => setPageContent(html));
    } else {
      setPageContent(<Construction page={"Transcriptions - " + page_id} />);
    }

  }, [page_id, matchingPage, matchingPageUri]);

  if (!page_id) {
    return <Construction page={"Transcriptions"} />
  } else if (!matchingPage) {
    return <NotFoundError />
  }

  return (
    <>
      <p>{matchingPage.title_full}</p>
      {pageContent}
    </>
  );
};

export default TranscriptionViewer