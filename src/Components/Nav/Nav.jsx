import { useState } from 'react';
import style from './Nav.module.css';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.devCon}>
        <div className={style.dev}>Desarrollador Backend</div>
      </div>
      {menu ? (
        <ImMenu4 onClick={() => setMenu(!menu)} className={style.menu} />
      ) : (
        <ImMenu3 onClick={() => setMenu(!menu)} className={style.menu} />
      )}
      <div className={style.contBtn}>
        <a href='#Home' className={style.btn}>
          Home
        </a>
        <a href='#Proyectos' className={style.btn}>
          Proyectos
        </a>
        <a href='#SobreMi' className={style.btn}>
          Sobre Mi
        </a>
        <a href='#Skills' className={style.btn}>
          Skills
        </a>
      </div>

      {menu ? (
        <div className={style.contBtnMov}>
          <a href='#Home' className={style.btn}>
            Home
          </a>
          <a href='#Proyectos' className={style.btn}>
            Proyectos
          </a>
          <a href='#SobreMi' className={style.btn}>
            Sobre Mi
          </a>
          <a href='#Skills' className={style.btn}>
            Skills
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
