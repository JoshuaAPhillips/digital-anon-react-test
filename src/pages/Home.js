import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Construction from '../components/Construction.js';
import { useParams } from 'react-router-dom';

const Home = () => {

  return(
    <>
      <Header />
      <Construction />
      <Footer />
    </>
  )
}

export default Home