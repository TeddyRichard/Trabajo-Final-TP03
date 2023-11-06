import React from 'react';
import Inicio from './Inicio';
import Historial from './Historial';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App()
{

  return (

    <>
    <BrowserRouter>
      <Routes> 
      
            <Route path='/' Component={Inicio}></Route>       
            <Route path='Historial' Component={Historial}></Route> 
       
      </Routes>
    </BrowserRouter>  
    </>
    
  )
}

export default App
