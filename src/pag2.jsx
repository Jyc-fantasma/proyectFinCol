import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from './imagenes/promo2003.jpg';
import im10 from './imagenes/fotopromo2006.jpg';
import im2 from './imagenes/promo201.jpg';
import im3 from './imagenes/estudiante.jpg';
import im4 from './imagenes/ora sivica.jpg';
import im5 from './imagenes/ora sivica2.jpg';
import im6 from './imagenes/reencuentro2.jpg';
import im8 from './imagenes/reencuentro2.jpg';
import im9 from './imagenes/fotopromo2006.jpg';
import './pag2e.css';
const Pag2 = () => {
return (
    <div className="Galery">
    <h1>FOTOS DEL SAN LUIS</h1>
    <p>
      ...
    </p>
    <Carousel>
        <Carousel.Item>
          <img src={im1} alt="First slide" />
          <Carousel.Caption>
            <h3>Egresados</h3>
            <p>Graduados</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im2} alt="Second slide" />
          <Carousel.Caption>
            <h3>docentes</h3>
            <p>estudiantes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im3} alt="Third slide" />
          <Carousel.Caption>
            <h3>docentes</h3>
            <p>estudiantes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>
      <Carousel>
        <Carousel.Item>
          <img src={im4} alt="First slide" />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im5} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im6} alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>
      <Carousel>
        <Carousel.Item>
          <img src={im9} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im8} alt="Second slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im10} alt="Third slide" />
          <Carousel.Caption>
            <h3>estudiante</h3>
            <p>estudiante</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p >.</p>
      <p >..</p>

      <Carousel>
        <Carousel.Item>
          <img src={im1} alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im8} alt="Second slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={im5} alt="Third slide" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      <p >.</p>
      <p >..</p>
      <p>
        <center>
        <h3>
          
        

          CONOSCA A NUESTRA FAMILIA


        </h3>
        <p>
          ...
        </p>
        </center>
      </p>
    </div>
);
}

export default Pag2;