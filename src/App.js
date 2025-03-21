import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import AgentSecurite from './Components/AgentSecurite';
import ChauffeurPrive from './Components/ChauffeurPrive';
import SecuriteEvenements from './Components/SecuriteEvenements';
import SecuriteRapproche from './Components/SecuriteRapproche';
import SolutionSecurite from './Components/SolutionSecurite';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/agent_securite' element={<AgentSecurite />} />
        <Route exact path='/chauffeur_prive' element={<ChauffeurPrive />} />
        <Route exact path='/securite_evenements' element={<SecuriteEvenements />} />
        <Route exact path='/Securite_rapproche' element={<SecuriteRapproche />} />
        <Route exact path='/Solution_securite' element={<SolutionSecurite />} />


      </Routes>
    </Router>
  );
}

export default App;
