import { useState } from 'react';
import style from './Nav.module.css';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { VscGithub } from 'react-icons/vsc';
import {TbBrandGithub, TbBrandGmail} from 'react-icons/tb'
import { IoIosMail } from 'react-icons/io';

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
        <div>
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
          <div className={style.contact}>
            <span className={style.span}>Contactame:</span>
            <a
              title='Github'
              className={style.a}
              href='https://github.com/Jaider-Nieto'
              target='_blanck'
            >
              <TbBrandGithub className={style.icon} />
            </a>

            <a
              title='Gmail'
              className={style.a}
              href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTNGfLrBXqxDgDSCWNbSPfZrwRNXNxwzxHHMmtdDhmtMvNRlcghZCHMtlCnXWWlXjzQkMVV'
              target='_blanck'
            >
              <TbBrandGmail className={style.icon} />
            </a>

            <a
              title='Linkedin'
              className={style.a}
              href='https://www.linkedin.com/in/jaider-nieto'
              target='_blanck'
            >
              <AiFillLinkedin className={style.icon} />
            </a>

            <a
              title='Whatsapp'
              className={style.a}
              href='https://wa.me/+573245255370?text=Buen%20día'
              target='_blanck'
            >
              <FaSquareWhatsapp className={style.icon} />
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
