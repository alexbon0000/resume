
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

      <section className='test_section' style={{backgroundColor:"#334a5b"}}>
        <div className='section_photo'>
        <img src='/5.png' alt='мое фото'/>
        </div>
        <div className='section_text'>
          <div>ПО</div>
          <div className='right_text'>РТ</div>
          <div className='left_text'>
            <div>ФО</div>
            <div className='fio_text'><span>БОНДАРЕНКО АЛЕКСЕЙ <br/><span className='front_text'>Frontend-разработчик</span></span></div>
            </div>
          <div className='right_text'>ЛИО</div>
        </div>
      </section>

      <section  ref={aRef} style={{backgroundColor:"#7395AE"}}>
        <div className='work_info_section'>
          <h1>ОБРАЗОВАНИЕ</h1>
          <div className='steps'>
              {/* <div className='line'/> */}
              <div className='step_box'>информация орцвислот</div>
              <div className='line'/>
              <div className='step_box'>информация орцвислот</div>
              <div className='line'/>
              <div className='step_box'>информация орцвислот</div>
             
          </div>
        </div>
      
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
        
      </section>

      <section className='about_me_section' style={{backgroundColor:"#334a5b"}} ref={aboutMeRef}>
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

      <footer ref={contactsRef} style={{backgroundColor:"#7395AE"}}>
        Footer
      </footer>

    </div>
  )
}

export default App
