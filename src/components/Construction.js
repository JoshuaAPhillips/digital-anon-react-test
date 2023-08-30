import { React } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Construction.module.css';


const Construction = ({ page="Homepage" }) => {
  return(
    <Container fluid className={styles.Container}>
        <h1 className={styles.h1}>The Digital 'Anon'</h1>
        <h2>A Digital, Genetic Edition of Virginia Woolf's Final Essays</h2>
        <br />
        <p className={styles.emoji}>🚧</p>
        <p className={styles.p}>{page}: This page is under construction. Please check back later.</p>
    </Container>
  )

}

export default Construction