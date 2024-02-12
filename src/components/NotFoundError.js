import Container from 'react-bootstrap/Container';
import styles from './NotFoundError.module.css';
import { Link } from 'react-router-dom';

const NotFoundError = () => {
  return (
    <Container fluid className={styles.Container}>
    <h1>Error 404: Page not found</h1>
    <p className={styles.emoji}>⛔️</p>
    <h2><Link to="/">Return to homepage</Link></h2>
    </Container>
  )
}

export default NotFoundError