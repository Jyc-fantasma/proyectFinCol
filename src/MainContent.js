import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './MainContent.css';
import Main from './main';
import Pag10 from './pag10';
import Pag2 from './pag2';
import Pag3 from './pag3';
import Pag4 from './pag4';
import Pag5 from './pag5';
import Pag6 from './pag6';
import Pag7 from './pag7';
import Pag8 from './pag8';
import Pag9 from './pag9';
function MainContent() {
  return (
    
    <main>
        <Router>
       
        <h1>U.E. SAN LUIS FE Y ALEGRIA</h1>
         
         <Link to="/main">HISTORIA</Link>
         <Link to="/pag2">DOCENTES</Link>
         <Link to="/pag3">ESTUDIANTES</Link>
         <Link to="/pag4">EVENTOS Y ACTIVIDIDADES</Link>
         <Link to="/pag5">VICION MISION</Link>
         <Link to="/pag6">CONCURSOS</Link>
         <Link to="/pag7">CONTATOS</Link>
         <Link to="/pag8">NUESTRA FAMILIA</Link>
         <Link to="/pag9">UBICACION</Link>
         <Link to="/pag10">dsfdsggdsg</Link>
       
     
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/pag2" element={<Pag2 />} />
          <Route path="/pag3" element={<Pag3 />} />
          <Route path="/pag4" element={<Pag4 />} />
          <Route path="/pag5" element={<Pag5 />} />
          <Route path="/pag6" element={<Pag6 />} />
          <Route path="/pag7" element={<Pag7 />} />
          <Route path="/pag8" element={<Pag8 />} />
          <Route path="/pag9" element={<Pag9 />} />
          <Route path="/pag10" element={<Pag10 />} />
        </Routes>
        </Router>
   
   
    </main>
  );
}

export default MainContent;
