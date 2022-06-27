import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Careers from './components/pages/Careers';

import './App.css';
import CareersState from './context/careers/CareersState';


function App() {
  return (
    <CareersState>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Careers />} />
        <Route path="jobs/:id" element={<Careers />} />

      </Routes>
    </CareersState>
  );
}

export default App;
