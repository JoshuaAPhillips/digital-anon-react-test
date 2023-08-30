import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Construction from '../components/Construction.js';
import { useParams } from 'react-router-dom';

const FacsimileView = ( {page} ) => {

  return(
    <>
      <Construction page={"Facsimiles"}/>
    </>
  )
}

export default FacsimileView