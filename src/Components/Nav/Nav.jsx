import style from './Nav.module.css'

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.devCon}>
        <a href='#Home' className={style.dev} >Web Developer</a>
      </div>
      <a href='#SobreMi' className={style.btn} >Sobre Mi</a>
      <a href='#Proyectos' className={style.btn} >Proyectos</a>
      <a href='#Skills' className={style.btn} >Skills</a>
      <a href='#Contact' className={style.btn} >Contacto</a>
    </div>
  )
}

export default Nav;