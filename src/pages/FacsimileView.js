import Construction from '../components/Construction.js';
import Mirador from '../components/Mirador.js';
import { useParams } from 'react-router-dom';

const FacsimileView = ({ page }) => {

  const manifests = [
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-1-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-2-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-3-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-4-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-5-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-6-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-7-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-8-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-9-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m1-8-10-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m45-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m46-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m47-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m48-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m49-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m50-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m51-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m52-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m53-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-1-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-2-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-3-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-4-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-5-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-6-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-7-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-8-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-9-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-10-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m54-11-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m108-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m109-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m110-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m111-1-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m111-2-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m111-3-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m112-1-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m112-2-manifest.json",
    },
    {
      manifestId: "https://raw.githubusercontent.com/JoshuaAPhillips/digital-anon/main/manifests/m113-3-manifest.json",
    },
  ]
  
  const config = {
    id: "mirador",
    catalog: manifests
  }

  return(
    <>
    {/*<div style={{position: 'relative', width: '100%', height: '85vh', border: 'none'}}>
      <Mirador config={config}
        plugins={[]} />
  </div>*/}
      
      <iframe 
        src="https://joshuaaphillips.github.io/digital-anon/html/miradortest.html" 
        style={{width: '100%', height: '85vh', border: 'none'}}
  />
    </>
  )
}

export default FacsimileView