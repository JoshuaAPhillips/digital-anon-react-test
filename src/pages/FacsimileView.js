import Construction from '../components/Construction.js';
import MiradorViewer from '../components/Mirador.js';
import { useParams } from 'react-router-dom';

const FacsimileView = ({ page }) => {

  return(
    <>
      <Construction page={"Facsimiles"}/>
    </>
  )
}

export default FacsimileView