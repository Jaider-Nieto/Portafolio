import style from './Proyects.module.css';
import {
  SiAmazonaws,
  SiExpress,
  SiMercadopago,
  SiSequelize
} from 'react-icons/si';
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux
} from 'react-icons/bi';

const Proyects = () => {
  return (
    <div id='Proyectos' className={style.container}>
      {/* GreenScreen */}

      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>GreenScreen</h3>
          <a
            href='https://movies-front-tau.vercel.app/'
            target='_blank'
            className={style.imgCon}
          >
            <ul>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/pjp8hGJ/home-green.png'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/3fKnqBD/login-green.png'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/jLPGxny/singup-green.png'
                />
              </li>
            </ul>
          </a>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              GreenScreen es una plataforma web dedicada al mundo del cine y las
              películas. Los usuarios pueden explorar una extensa biblioteca de
              películas, publicar reseñas y comentarios, así como realizar
              donaciones para apoyar a los desarrolladores. La plataforma ofrece
              características avanzadas, incluyendo filtros de búsqueda, una
              pasarela de pagos segura, almacenamiento de medios en Cloudinary y
              un panel de administración para el control total de la comunidad.
            </p>
          </div>

          <div className={style.skills}>
            <span className={style.resal}>Tecnologias usadas:</span>
            <div className={style.contIcons}>
              <BiLogoJavascript className={style.js} />
              <BiLogoCss3 className={style.css} />
              <BiLogoReact className={style.react} />
              <SiExpress className={style.express} />
              <BiLogoRedux className={style.redux} />
              <BiLogoPostgresql title='POSTGRES' className={style.postgres} />
              <SiSequelize title='SEQUELIZE' className={style.sequelize} />
              <BiLogoGit title='GIT' className={style.git} />
              <BiLogoNodejs title='NODEJS' className={style.node} />
              <SiAmazonaws title='AWS' className={style.aws} />
              <SiMercadopago title='MERCADO PAGO' className={style.mercado} />
            </div>
          </div>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Back'
          >
            Repositorio Backend
          </a>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Front'
          >
            Repositorio Frontend
          </a>
        </div>
      </div>

      {/* Card Pi Pokemons */}
      {/* <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Pi Pokemons</h3>
          <div className={style.imgCon}>
            <ul>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/5W0q8DW/Pi-pokemon-1.jpg'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/VMd6vv3/Pi-pokemon-2.png'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/8YX481P/Pi-pokemon-3.png'
                />
              </li>
            </ul>
          </div>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              <span className={style.resal}>App de Pokemons que incluye:</span>
              <br />
              Filtros en conjunto, formulario para la creación de un Pokemon,
              paginado, ordenamientos, api rest y crud completo, etc.
            </p>
            <ul className={style.tecno}>
              <li>
                <span className={style.resal}>Front:</span> React, Redux y CSS.
              </li>
              <li>
                <span className={style.resal}>Back:</span> Node.js, Express.
              </li>
              <li>
                <span className={style.resal}>DataBase:</span> PostgreSQL y
                Sequelize.
              </li>
            </ul>
          </div>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Pi-Pokemon'
          >
            Repositorio
          </a>
        </div>
      </div> */}

      {/* Card Soul Music*/}

      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Soul Music</h3>
          <a
            href='https://soul-music-pf.netlify.app/home'
            target='_blank'
            className={style.imgCon}
          >
            <ul>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/VxN1KDC/home-pf.jpg'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/r2qQgFd/songs-pf.png'
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src='https://i.ibb.co/nw59SB4/admin-pf.jpg'
                />
              </li>
            </ul>
          </a>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              Soul Music es una plataforma web que ofrece a los amantes de la
              música una experiencia auditiva personalizada. Los usuarios pueden
              explorar una amplia biblioteca musical, crear listas de
              reproducción personalizadas y marcar sus canciones favoritas.
              Además, Soul Music ofrece membresías premium con contenido
              exclusivo y más. Los usuarios también pueden comprar vinilos
              directamente desde la plataforma. Con una pasarela de pagos segura
              y un panel de administración completo.
            </p>
          </div>

          <div className={style.skills}>
            <span className={style.resal}>Tecnologias usadas:</span>
            <div className={style.contIcons}>
              <BiLogoJavascript className={style.js} />
              <BiLogoCss3 className={style.css} />
              <BiLogoReact className={style.react} />
              <SiExpress className={style.express} />
              <BiLogoRedux className={style.redux} />
              <BiLogoPostgresql title='POSTGRES' className={style.postgres} />
              <SiSequelize title='SEQUELIZE' className={style.sequelize} />
              <BiLogoGit title='GIT' className={style.git} />
              <BiLogoNodejs title='NODEJS' className={style.node} />
              <SiAmazonaws title='AWS' className={style.aws} />
              <SiMercadopago title='MERCADO PAGO' className={style.mercado} />
            </div>
          </div>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Back'
          >
            Repositorio Backend
          </a>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Front'
          >
            Repositorio Frontend
          </a>
        </div>
      </div>

      {/* <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Soul Music</h3>
          <div className={style.imgCon}>
            
          </div>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              <span className={style.resal}>Proyecto final incluye:</span>
              <br />
              Login de usuarios, vista de las canciones y albums, filtros
              combinados, carrito de compras, pasarela de pagos, cloudinary, api
              rest y panel de admin.
            </p>
            <ul className={style.tecno}>
              <li>
                <span className={style.resal}>Front:</span> React, Redux y CSS.
              </li>
              <li>
                <span className={style.resal}>Back:</span> Node.js, Express y
                AWS.
              </li>
              <li>
                <span className={style.resal}>DataBase:</span> PostgreSQL y
                Sequelize.
              </li>
            </ul>
          </div>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Back'
          >
            Repositorio Backend
          </a>
          <a
            className={style.btn}
            target='_blanck'
            href='https://github.com/Jaider-Nieto/Soul-Music-Front'
          >
            Repositorio Frontend
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Proyects;
