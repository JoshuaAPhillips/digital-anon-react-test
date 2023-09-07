import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NotFoundError from '../NotFoundError';
import Construction from '../Construction';
import AnnotationPane from './AnnotationPane';

//import styles from './TranscriptionViewer.module.css';

const TranscriptionViewer = ({ documentData, showAnnotations, showTypos, showAdditions, showDeletions, showPane }) => {
  const { page_id } = useParams();

  const matchingPage = documentData.find((document) => document.id === page_id);
  const matchingPageUri = matchingPage ? matchingPage.transcription_html_uri : null;
  const [pageContent, setPageContent] = useState(null);
  const [error, setError] = useState(false);


  useEffect(() => {
    if (matchingPage && matchingPageUri) {
      fetch(matchingPageUri)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          return response.text();
        })
        .then(html => {
          setPageContent(html);
          setError(false); // Reset error flag if fetch is successful
        })
        .catch(error => {
          setError(true); // Set error flag if an error occurs
        });
    } else {
      setError(false); // Reset error flag if there's no matching page or URI
    }
  }, [page_id, matchingPage, matchingPageUri]);

  if (!matchingPageUri) {
    return <Construction page={"Transcriptions - " + page_id} />;
  } else if (!matchingPage) {
    return <NotFoundError />;
  } else if (error) {
    return <NotFoundError />; // Render error component if an error occurred during fetch
  }

  return (
    <>
      <Row>
        <Col xs={8}>
          <Container>
          <p>{matchingPage.title_full}</p>
          <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>
          </Container>
        </Col>
        <Col xs={4}>
          <AnnotationPane showAnnotations={showAnnotations}/>
        </Col>
      </Row>
    </>
  );
};

export default TranscriptionViewer;