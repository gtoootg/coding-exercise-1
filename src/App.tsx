import React from 'react';

import './App.css';

import Top from './pages/top/Top'
import List from './pages/list/List'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BasicTable from './pages/table/Table';


function App() {

  return (
    <BrowserRouter>
    <h1>hello</h1>
    <Link to="/list">to Link</Link>
    <Link to="/">to Home</Link>
    <Link to="/table">to Table</Link>
      <Routes>
        <Route path="/" element={<Top/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/table" element={<BasicTable />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
