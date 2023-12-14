import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const colors = {
  primary: '#007BFF', // Azul
  secondary: '#17A2B8', // Azul claro
};

const PageWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Heading = styled.h1`
  color: ${colors.primary};
`;

const ContactItem = styled.div`
  margin: 10px 0;
`;

const pag9 = () => {
  return (

    <div>
    <PageWrapper>
      <Heading>CANTACTANOS</Heading>

      <ContactItem>
        <strong>Correo Electrónico:</strong> InfiniteRose@gmail.com
      </ContactItem>
      <ContactItem>
        <strong>cELULARESS:</strong> 78775634
      </ContactItem>

      <Heading>Ubicaciones</Heading>

      <ContactItem>
        <strong>zona Tembladerani</strong> plaza lira, La Paz
      </ContactItem>
      <ContactItem>
        <strong>cancha san luis</strong> sona lato san pedro 
      </ContactItem>


    

      <Link to="/">Volver a la Página Principal</Link>
    </PageWrapper>

    <ListGroup>
      <ListGroup.Item disabled>Instagram: OpiumCultureClub</ListGroup.Item>
      <ListGroup.Item>celulares: 78775634</ListGroup.Item>
      <ListGroup.Item>Telegram: sanluisistas</ListGroup.Item>
      <ListGroup.Item>Facebook: san luis por siempre</ListGroup.Item>
    </ListGroup>



   </div>
  );
};

export default pag9;

