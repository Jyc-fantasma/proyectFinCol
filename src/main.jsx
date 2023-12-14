import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import king from './imagenes/fotopromo2006.jpg';
import portal from './imagenes/promo201.jpg';
import portal2 from './imagenes/promo2003.jpg';
import './pag1e.css';
const main = () => {
  const backgroundStyle = {
    backgroundImage: `url('src/imagenes/fondo.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px',
  };
  return (
    <div className="main" style={backgroundStyle}>
      <h1>Banda Autoctona y de guerra</h1>
     <h3> Contamos con dos bandas la de guerra y la autoctona para concursos</h3>

     <div style={backgroundStyle}>
     

    <Figure>
      <Figure.Image
        width={271}
        height={280}
        alt="271x280"
        src={portal}
      />
      <Figure.Caption>
      <h4> Bienbenidos al colegio san luis Fe y alegria
      </h4></Figure.Caption>
    </Figure>
<p>.</p>
    <Figure>
      <Figure.Image
      width={600}
      height={450}
      alt='life and life'
      src={portal2}
      />
      <Figure.Caption>
        <h4>
        En la ciudad de La Paz, Bolivia, se encuentra el Colegio Fe y Alegría "Copacabana", una institución educativa que lleva más de 50 años formando a jóvenes de escasos recursos. El colegio fue fundado en 1966 por el profesor Humberto Portocarrero, quien tenía la visión de brindar una educación de calidad a los niños y niñas de las zonas periurbanas de la ciudad.
        </h4>
        </Figure.Caption>
    </Figure>

  <Figure>
      <Figure.Image
      width={600}
      height={450}
      alt='life and life'
      src={king}
      />
      <Figure.Caption>
        <h3>

        La Unidad Educativa San Luis es una institución educativa ubicada en La Paz, Bolivia. Esta escuela trabaja en colaboración con la organización Fe y Alegría para proporcionar educación integral y formación en valores a sus estudiantes 
          <p></p>
          Mi discrepancia surge en esta unificación pues aquellos que llegaron vinieron mezclados, Africa es un continente enorme, con muchas, muchímas culturas, lenguas, países, costumbres, dialectos...hasta el día de hoy uno de los mayores prejuicios que azota la sociedad es creer que todos  aquellos que fueron sacados de sus tierras hablaban el mismo idioma; eran extraños entre ellos; estaban mayormente solos y mezclados con gente que hablaba un idoma aparte... 
          <p></p>
          y así como no todos los que llegaron eran de un solo territorio, no todos los que estamos venimos de un solo lugar; si bien los yungas sería una especie de capital, la verdad es que hay comunidades afro amplias tanto en Cochabamba, Santa Cruz e incluso en Chuquisaca...por lo mimso, hemos avanzado de formas distintas, teniendo que aprender a sobrellevar que si de por si somos pocos y la gente nos mire con rescelo por ser diferentes, entre nosotros también somos diferentes; 
           <p></p>
          La Unidad Educativa San Luis es una institución educativa ubicada en La Paz, Bolivia. Esta escuela trabaja en colaboración con la organización Fe y Alegría para proporcionar educación integral y formación en valores a sus estudiantes 


        </h3>

    </Figure.Caption>

    </Figure>

    </div>

    </div>


  );
}
export default main;


