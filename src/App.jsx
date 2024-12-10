import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import CounterPage from './Components/CounterPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
