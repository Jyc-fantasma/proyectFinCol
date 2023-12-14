
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Comp from './Comp';
import encuentroVideo from './imagenes/VIDEO.mp4';
const Pag3 = () => {
  return (
    <div>
      <h1>MISION</h1>

      <Comp />

      <h2>Visitanos</h2>
      <p>

      «Lograr una educación integral de calidad con estudiantes críticos reflexivos y analíticos de acuerdo al contexto; con una infraestructura especializada por niveles para satisfacer las necesidades de la comunidad educativa».
      </p>
      <video width="640" height="360" controls>
        <source src={encuentroVideo} type="video/mp4" />
        Hola sanluisistas
      </video>

    </div>
  );
}

export default Pag3;
