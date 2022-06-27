import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Careers from './components/pages/Careers';

import './App.css';
import CareersState from './context/careers/CareersState';


function App() {
  return (
    <CareersState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Careers />} />
          <Route path="/jobs/:id" element={<Careers />} />
        </Routes>
      </Router>
    </CareersState>
  );
}

export default App;
