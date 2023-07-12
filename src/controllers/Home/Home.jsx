import style from './Home.module.css'
import Aside from '../Aside/Aside';
import Start from '../Start/Start';
import About from '../About/About';
import Proyects from '../Proyects/Proyects';

const Home = () => {
  return (
    <div className={style.container}>
      <Aside/>
      <Start/>
      <About/>
      <Proyects/>
    </div>
  )
}

export default Home;