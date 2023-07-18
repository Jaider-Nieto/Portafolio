import style from './Nav.module.css'

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.devCon}>
        <div className={style.dev} >Web Developer</div>
      </div>
      <a href='#Home' className={style.btn} >Home</a>
      <a href='#SobreMi' className={style.btn} >Sobre Mi</a>
      <a href='#Proyectos' className={style.btn} >Proyectos</a>
      <a href='#Skills' className={style.btn} >Skills</a>
    </div>
  )
}

export default Nav;