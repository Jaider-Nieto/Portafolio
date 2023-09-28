import style from './Skills.module.css';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoGit,
  BiLogoNodejs
} from 'react-icons/bi';
import {
  SiAmazonaws,
  SiExpress,
  SiMercadopago,
  SiNestjs,
  SiPrisma,
  SiSequelize
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className={style.container} id='Skills'>
      <h1 className={style.title}>Skills</h1>
      <div className={style.content}>
        <span className={style.iconContainer}>
          <BiLogoHtml5 title='HTML' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoCss3 title='CSS' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoJavascript title='JAVASCRIPT' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <SiExpress title='EXPRESS' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoReact title='REACT' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoRedux title='REDUX' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoTypescript title='TYPESCRIPT' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <SiNestjs title='NESTJS' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoPostgresql title='POSTGRES' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <SiSequelize title='SEQUELIZE' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoGit title='GIT' className={style.icon} />
        </span>
        <span className={style.iconContainer}>
          <BiLogoNodejs title='NODEJS' className={style.icon} />
        </span>

        <span className={style.iconContainer}>
          <SiAmazonaws title='AWS' className={style.icon} />
        </span>

        <span className={style.iconContainer}>
          <SiMercadopago title='MERCADO PAGO' className={style.icon} />
        </span>
      </div>
    </div>
  );
};

export default Skills;
