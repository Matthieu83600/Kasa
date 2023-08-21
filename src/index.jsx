import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Logements from './pages/Logements/Logements'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './styles/Global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/logements/:id" element={< Logements />} />
        <Route path="/about" element={< About /> } />
        <Route path="*" element={< Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);