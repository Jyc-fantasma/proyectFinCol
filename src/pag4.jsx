// En Page1.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './pag4e.css';

const Pag4 = () => {
  const songs = [
    'High for This',
 'What You Need',
 'House of Balloons / Glass Table Girls',
 'The Morning',
 'Wicked Games',
 'The Party & The After Party',
 'Coming Down',
 'Loft Music',
 'The Knowing',
 'Twenty Eight',
 'Lonely Star',
 'Life of the Party',
 'Thursday',
 'The Zone (feat. Drake)',
 'Rolling Stone',
 'Valerie',
 'Initiation',
 'Same Old Song (feat. Juicy J)',
 'The Fall',
 'Next',
  ];

  const getRandomSize = () => Math.floor(Math.random() * 12) + 1;
  const getRandomOffset = () => Math.floor(Math.random() * 12);

  return (
    <div>
      <h1>EVENTOS</h1>
      
<p></p>
    

    <Container>
      <Row>
        <Col xs={12} md={8}>
          12 de marso japi alguin 
        </Col>
        <Col xs={6} md={4}>
          14 agosto aniversario
        </Col>
      </Row>

    
   
    <div className="tracklist">
      {songs.map((song, index) => (
        <Row key={index} className="mb-3">
          <Col xs={getRandomSize()} md={getRandomSize()} lg={getRandomSize()} xl={getRandomSize()} className={`offset-${getRandomOffset()}`}>
            {song}
          </Col>
        </Row>
      ))}
    </div>

    </Container>

    </div>
  );
}

export default Pag4;
