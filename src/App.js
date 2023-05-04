import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import ProjetoIndividual from './pages/ProjetoIndividual';
import Skills from './pages/Skills';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/sobreMim" element={<SobreMim />} />
          <Route path="/portfolio/projetos" element={<Projetos />} />
          <Route path="/portfolio/projetos/:name" element={<ProjetoIndividual />} />
          <Route path="/portfolio/skills" element={<Skills />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
