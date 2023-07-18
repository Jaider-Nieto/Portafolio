import style from "./Proyects.module.css";

const Proyects = () => {
  return (
    <div id="Proyectos" className={style.container}>
      <h2 className={style.title}>Proyectos</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Pi Pokemons</h3>
          <div className={style.imgCon}>
            <ul>
              <li><img className={style.cardImg} src="src\Imgs\Pi-pokemon-1.png" /></li>
              <li><img className={style.cardImg} src="src\Imgs\Pi-pokemon-2.png" /></li>
              <li><img className={style.cardImg} src="src\Imgs\Pi-pokemon-3.png" /></li>
            </ul>
          </div>
          <div className={style.cardDesCon}>
            <p className={style.cardDescription}>
              <span className={style.resal}>App de Pokemons que incluye:</span>
              Filtros en conjunto, Formulario para la creación de un Pokemons,
              Paginado, ordenamientos, Api Rest y CRUD completo, etc.
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
    </div>
  );
};

export default Proyects;
