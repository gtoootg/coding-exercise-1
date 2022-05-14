import React from 'react';

import './App.css';

import Top from './pages/top/Top'
import List from './pages/list/List'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <h1>hello</h1>
    <Link to="/list">to Link</Link>
    <Link to="/">to Home</Link>
      <Routes>
        <Route path="/" element={<Top/>}/>
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
