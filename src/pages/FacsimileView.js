import Construction from '../components/Construction.js';
import Mirador from '../components/Mirador.js';
import { useParams } from 'react-router-dom';

const FacsimileView = ({ page }) => {

  return(
    <>
    <div style={{position: 'relative', width: '100%', height: '85vh', border: 'none'}}>
      <Mirador config={{ 
        id: "mirador"
        }} plugins={[]} />
    </div>
      
      {/*<iframe 
        src="https://joshuaaphillips.github.io/digital-anon/html/miradortest.html" 
        style={{width: '100%', height: '85vh', border: 'none'}}
  />*/}
    </>
  )
}

export default FacsimileView