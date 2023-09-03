import Construction from '../components/Construction.js';
import MiradorViewer from '../components/Mirador.js';
import { useParams } from 'react-router-dom';

const FacsimileView = ({ page }) => {

  return(
    <>
      <iframe 
        src="https://joshuaaphillips.github.io/digital-anon/html/miradortest.html" 
        style={{width: '100%', height: '85vh', border: 'none'}}
      />
    </>
  )
}

export default FacsimileView