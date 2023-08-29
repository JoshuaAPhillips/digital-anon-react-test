import Header from './components/header.js';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid style={{ verticalAlign: "center", textAlign: "center", height: "85vh" }}>
        <h1 style={{ paddingTop: '2.0rem' }}>The Digital 'Anon'</h1>
        <h2>A Digital, Genetic Edition of Virginia Woolf's Final Essays</h2>
        <br />
        <p style={{ fontSize: '10.0rem' }}>🚧</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>This site is under construction. Please check back later.</p>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
