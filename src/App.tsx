
import { DownOutlined } from '@ant-design/icons'
import './App.css'
import { useRef } from 'react'
import 'animate.css';

function App() {

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => { 
    if (ref.current) { 
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth', }); 
    }
  }

  return (
    <div className='box'>
      <header>
        <ul className="menu-items">
                <li onClick={() => scrollToRef(aboutMeRef)}>Обо мне</li>
                <li onClick={() => scrollToRef(contactsRef)}>Контакты</li>
              </ul>
      </header>
      <section className='about_me_section' style={{backgroundColor:"rgb(60, 139, 102)"}} ref={aboutMeRef}>
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
        
      </section>
      <section className='work_info_section' ref={aRef} style={{backgroundColor:"rgb(40, 100, 72)"}}>
        <div className='work_info_section_box'>
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
        </div>
        
      </section>
      <section style={{backgroundColor:"rgb(60, 139, 102)"}}>
        Content
      </section>
      <footer ref={contactsRef} style={{backgroundColor:"rgb(40, 100, 72)"}}>
        Footer
      </footer>
    </div>
  )
}

export default App
