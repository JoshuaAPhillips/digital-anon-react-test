import { createBrowserRouter, BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import FacsimileView from './pages/FacsimileView.js';
import TranscriptionView from "./pages/TranscriptionView.js";
import NotFound from './pages/NotFound.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import documentData from './resources/data/document_data.js'

const transcriptionRoutes = documentData.map((document) => ({
  key: document.id,
  path: 'transcriptions/:page_id',
  element: <TranscriptionView documentData={documentData} />,
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/facsimiles', 
        element: <FacsimileView /> 
      },
      {
        path: '/transcriptions', 
        element: <TranscriptionView /> ,
        children: transcriptionRoutes
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
