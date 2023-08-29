import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <Navbar fluid expand="lg" className={styles.footer}>
        <Container fluid>
          <Navbar.Text>Copyright details here.</Navbar.Text>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer