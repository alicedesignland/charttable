import React from 'react';
import './App.css';
import { Table } from './Table';
import Chart from './Chart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Table />} />
        <Route path="/chart/:id" element={<Chart  />}  />
        <Route path="/:id" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
