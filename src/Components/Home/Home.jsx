import style from './Home.module.css';
import Aside from '../Aside/Aside';
import Start from '../Start/Start';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div className={style.container}>
      <Aside />
      <Start />
      <Proyects />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
