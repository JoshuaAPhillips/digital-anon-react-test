import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Construction from '../components/Construction.js';
import { useParams } from 'react-router-dom';
import Construction from '../components/Construction.js'

const DocumentView = () => {

  return(
    <>
      <Header />
      <Construction />
      <Footer />
    </>
  )
}

export default DocumentView