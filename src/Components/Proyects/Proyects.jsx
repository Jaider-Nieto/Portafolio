import style from "./Proyects.module.css";

const Proyects = () => {
  return (
    <div id="Proyectos" className={style.container}>
      {/* Card Pi Pokemons */}
      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Pi Pokemons</h3>
          <div className={style.imgCon}>
            <ul>
              <li>
                <img
                  className={style.cardImg}
                  src="src\Imgs\Pi-pokemon-1.png"
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src="src\Imgs\Pi-pokemon-2.png"
                />
              </li>
              <li>
                <img
                  className={style.cardImg}
                  src="src\Imgs\Pi-pokemon-3.png"
                />
              </li>
            </ul>
          </div>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              <span className={style.resal}>App de Pokemons que incluye:</span>{" "}
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
            target="_blanck"
            href="https://github.com/Jaider-Nieto/Pi-Pokemon"
          >
            Repositorio
          </a>
        </div>
      </div>

      {/* Card Pf Back*/}

      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Proyecto Final</h3>
          <div className={style.imgCon}>
            <ul>
              <li>
                <img className={style.cardImg} src="src/Imgs/home-pf.jpeg" />
              </li>
              <li>
                <img className={style.cardImg} src="src/Imgs/songs-pf.png" />
              </li>
              <li>
                <img className={style.cardImg} src="src/Imgs/admin-pf.jpeg" />
              </li>
            </ul>
          </div>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              <span className={style.resal}>Proyecto final incluye:</span>{" "}
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
            target="_blanck"
            href="https://github.com/Jaider-Nieto/Proyecto-Final-Back"
          >
            Repositorio Backend
          </a>
          <a
            className={style.btn}
            target="_blanck"
            href="https://github.com/Jaider-Nieto/Proyecto-Final-Front"
          >
            Repositorio Frontend
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
