import './App.css';
import React from 'react';
import Home from './routes/Home';
import Agenda from './routes/Agenda';
import AgregarObra from './routes/AgregarObra';
import AgregarEvento from './routes/AgregarEvento';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/agenda' element={<Agenda/>}/>
          <Route path='/agregarObra' element={<AgregarObra/>}/>
          <Route path='/agregarEvento' element={<AgregarEvento/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
