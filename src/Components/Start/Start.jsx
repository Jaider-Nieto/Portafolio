import style from "./Start.module.css";

const Start = () => {
  return (
    <div className={style.container}>
      <h2 className={style.hi}>Hola, soy</h2>
      <h2 className={style.name}>Jaider Nieto</h2>
      <h2 className={style.dev}>Desarrollador Backend</h2>
      <div className={style.text}> con conocimientos solidos en Frontend </div>
      <a className={style.btn} href="https://drive.google.com/file/d/1pi9bvq2C1PsDex5Xfq0BV-8SNIZ6MwcB/view?usp=sharing">
        Descargar CV
      </a>
    </div>
  );
};

export default Start;
