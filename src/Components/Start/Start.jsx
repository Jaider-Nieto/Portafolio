import style from './Start.module.css'

const Start = () => {
  return (
    <div className={style.container}>
      <h2 className={style.hi}>Hola, Soy</h2>
      <h2 className={style.name}>Jaider Nieto</h2>
      <h2 className={style.dev}>Web Developer</h2>
      <div className={style.text}> Desarrollador Backend, con conocimientos en Frontend </div>
      <a className={style.btn} href="src\CV\JaiderNietoCV.pdf" download >Descargar CV</a>
    </div>
  )
}

export default Start;