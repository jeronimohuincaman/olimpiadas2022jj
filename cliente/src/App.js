import './App.css';
import React from 'react';
import Home from './routes/Home';
import Agenda from './routes/Agenda';
import AgregarObra from './routes/AgregarObra';
import AgregarEvento from './routes/AgregarEvento';
import EditarObra from './routes/EditarObra';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/agenda' element={<Agenda/>} exact/>
          <Route path='/agregarObra' element={<AgregarObra/>} exact/>
          <Route path='/agregarEvento' element={<AgregarEvento/>} exact/>
          <Route path='/editarobra/:idobra' element={<EditarObra/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
