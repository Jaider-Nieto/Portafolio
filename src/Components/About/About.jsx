import style from './About.module.css'

const About = () => {
  return (
    <div id='SobreMi' className={style.container}>
        <h2 className={style.title} >Sobre Mi</h2>
      <p className={style.text} >Soy un apasionado <span className={style.span} >desarrollador web</span> con experiencia en el desarrollo de <span className={style.span} >aplicaciones backend</span> y conocimientos sólidos en tecnologías de <span className={style.span} >frontend</span>. Me especializo en la creación de <span>soluciones robustas y escalables</span>, centrándome en <span className={style.span} >la eficiencia</span> y <span className={style.span} >la calidad</span> del código. Con habilidades de <span className={style.span} >resolución de problemas</span> y un enfoque meticuloso en los detalles, me dedico a desarrollar productos web de alto rendimiento y funcionalidad.</p>
    </div>
  )
}

export default About;