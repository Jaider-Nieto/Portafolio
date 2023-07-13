import style from './Proyects.module.css'

const Proyects = () => {
  return(
    <div id='Proyectos' className={style.container}> 
        <h2 className={style.title} >Proyectos</h2>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <h3 className={style.cardTitle} >Pi Pokemons</h3>
            <div className={style.imgCon} >
              <img className={style.cardImg} src="https://olimpica.vtexassets.com/arquivos/ids/1053950/image-b8f8ac9602a94e13b63ba6494baa07b8.jpg?v=638139307600100000" />
            </div>
            <p className={style.cardDescription} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ducimus. Facilis minus necessitatibus consectetur laudantium fugiat vitae, quas possimus, incidunt at asperiores dolorum assumenda, explicabo voluptate itaque labore perferendis sapiente?</p>
          </div>
          <div className={style.card}>
            <h3 className={style.cardTitle} >Nombre repo</h3>
            <div className={style.imgCon} >
              <img className={style.cardImg} src="https://olimpica.vtexassets.com/arquivos/ids/1053950/image-b8f8ac9602a94e13b63ba6494baa07b8.jpg?v=638139307600100000" />
            </div>
            <p className={style.cardDescription} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ducimus. Facilis minus necessitatibus consectetur laudantium fugiat vitae, quas possimus, incidunt at asperiores dolorum assumenda, explicabo voluptate itaque labore perferendis sapiente?</p>
          </div>
        </div>

    </div>
  )
}

export default Proyects;