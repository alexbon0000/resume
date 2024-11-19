
import './App.css'
import { useRef } from 'react'
import 'animate.css';
import { Header } from './components/header/header';
import { MeSection } from './components/meSection/meSection';
import { InfoSection } from './components/infoSection/infoSection';

function App() {

  const meSectionRef = useRef<HTMLDivElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => { 
    if (ref.current) { 
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth', }); 
    }
  }

  return (
    <div className='box'>
      <Header scroll={scrollToRef} meSectionRef={meSectionRef} contactsRef={contactsRef} infoSectionRef={infoSectionRef}/>
      <MeSection  ref={meSectionRef}/>
      <InfoSection ref={infoSectionRef}/>


       {/* <div className='work_info_section_box'>
          <p>На прежних местах работы занимался:</p>
          <ul>
            <li>Разработкой подгружаемых 3д моделей с анимацией (использовал библиотеку Three.js).</li>
            <li>Разработкой графиков (используя konva.js).</li>
            <li>Разработкой создания и проведения тестирования.</li>
            <li>Разработкой приложения создания расписания для групп и распределения нагрузки на преподавателей для учебных заведений.</li>
            <li>Разработкой приложения для ведения документации с возможностью сформировать отчет.</li>
          </ul>
          <p>Также использовал MobX и redux для управления состоянием, axios для связи с бекэндом, Ant Design, React Bootstrap, Material UI для UI. 
          Есть опыт разработки на react native.</p>
        </div> */}


      {/* <section className='about_me_section' style={{backgroundColor:"#334a5b"}} ref={aboutMeRef}>
        <div className='info_box'>
          <div className={`animate__animated animate__backInLeft myFase`}>
            <img src='/me.webp' alt='картинка'/>
          </div>
          <div className='text_about_me'>
            Привет! 
            <br/>Я Frontend-разработчик с реальным коммерческим опытом в создании и поддержке интерактивных пользовательских интерфейсов с использованием React.
            <br/>Мои навыки включают в себя разработку адаптивного дизайна, оптимизацию производительности и интеграцию с RESTful API.
            <br/>Имею опыт работы в кросс-функциональных командах и обладаю сильными навыками решения проблем.
            <br/>Стремлюсь создавать интуитивно понятные и производительные веб-приложения, которые улучшают пользовательский опыт.
          </div>
        </div>
        <div className='button_box'>
          <div className='down_button' onClick={() => scrollToRef(aRef)}>
            <DownOutlined />    
          </div>
        </div>
      </section> */}

      <footer ref={contactsRef} style={{backgroundColor:"#7395AE"}}>
        Footer
      </footer>

    </div>
  )
}

export default App
