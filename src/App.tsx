import React from 'react';

import './App.css';

import Top from './pages/top/Top'
import List from './pages/list/List'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BasicTable from './pages/table/Table';
import Header from './components/header/Header';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Top/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/table" element={<BasicTable />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
