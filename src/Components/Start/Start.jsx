import style from './Start.module.css';

const Start = () => {
  return (
    <div className={style.container}>
        <span className={style.hi}>Hola, soy</span>
        <span className={style.name}>Jaider Nieto</span>
      <p className={style.dev}>Desarrollador Backend</p>
      <p className={style.text}> con conocimientos solidos en Frontend </p>
      <a
        className={style.btn}
        href='https://drive.google.com/file/d/1KyNND9eo_Z52DAu92BKq5Nx8neW5VsYC/view?usp=sharing'
        target='_blank'
      >
        MI CV
      </a>
      <img
        className={style.img}
        src='https://i.ibb.co/268q6sn/yo-img.webp'
        alt='avatar'
      />
    </div>
  );
};

export default Start;
