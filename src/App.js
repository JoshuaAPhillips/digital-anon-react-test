import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import FacsimileView from './pages/FacsimileView.js';
import TranscriptionView from "./pages/TranscriptionView.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/facsimiles" element={<FacsimileView />} />
            <Route path="/transcriptions" element={<TranscriptionView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
