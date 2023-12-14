import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import RutaDeHistoria from './RutaDeHistoria';
import RutaDeMision from './RutaDeMision';
const colors = {
  primary: '#FFD700', // Amarillo dorado
  secondary: '#6A5ACD', // Azul púrpura
  accent1: '#E74C3C', // Rojo oscuro
  accent2: '#F39C12', // Naranja oscuro

};

const CenterWrapper = styled.div`
  text-align: center;
  margin: 20px;
  color: ${colors.primary};
`;

const Heading = styled.h1`
  color: ${colors.secondary};
`;

const MissionHeading = styled.h2`
  color: ${colors.accent1};
`;

const Button = styled.button`
  background-color: ${colors.accent2};
  color: black;
  font-size: 25px;
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken(${colors.accent2}, 10%);
  }
`;

const Pag5 = () => {
  return (
    <CenterWrapper>
      <Heading></Heading>

      <div>
        <h1>PENSAMIENTOS DE DOCENTES Y ESTUDIANTES </h1>
      </div>
      <p>
        bienbenidos a los pensamientos de algunos de nuestros docentes y estudiantes
      </p>

      <MissionHeading>nestros estudiantes</MissionHeading>
      <p>
        nos levantan el ogullo que tenemos por nuestro amado colegio san luis fe y alegria
      </p>

      <MissionHeading>docentes</MissionHeading>
      <p>
        segimos con los mejores 
      </p>
      <ul>
        <li>
          <p>
            <strong></strong> 
          </p>
        </li>
        <li>
          <p>
            <strong>nuestros egresado nos acreditan sus logros:</strong> nosotros nos sentimos orgullos de nuestros estudiantes
          </p>
        </li>
        <li>
          <p>
            <strong>nuestr mision es edudar</strong> Utilizando el poder del saver para con nuestros semejantes
          </p>
        </li>
      </ul>
      <Link to="/RutaDeHistoria">
        <Button>danos un like</Button>
      </Link>
      <Link to="/RutaDeMision">
        <Button>visitanos</Button>
      </Link>

      <div>

     </div>

      <Routes>
        <Route path="/RutaDeHistoria" element={<RutaDeHistoria />} />
        <Route path="/RutaDeMision" element={<RutaDeMision />} />
      </Routes>
    
</CenterWrapper>

  );
};

export default Pag5;
