// Importation des éléments dont on a besoin 
import React from 'react';
// Création des routes avec React Router
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importation des pages
import Home from './pages/Home/Home.jsx';
import Logements from './pages/Logements/Logements.jsx'
import About from './pages/About/About.jsx'
import Error from './pages/Error/Error.jsx'
// Importation composants fonctions hedaer et footer sur toutes les pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
// Design
import './styles/_Global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      // Création des routes avec React Router pour accéder aux différentes pages 
    }
    <Router>
      <Header />
      <Routes>
        {
          // Routes accessibles par l'utilisateur
        }
        <Route path="/" element={< Home />} />
        <Route path="/logements/:id" element={< Logements />} />
        <Route path="/about" element={< About /> } />
        {
          // Route indiquant que l'utilisateur n'est pas sur une route existante
        }
        <Route path="*" element={< Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);