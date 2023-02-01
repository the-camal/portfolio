import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from '../pages/home';
import Skills from '../pages/repos';
import Repos from '../pages/skills';
import  Navbar from "../components/navbar";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
