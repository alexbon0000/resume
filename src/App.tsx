
import './App.css'
import { useRef } from 'react'
import { Header } from './components/header/header';
import { MeSection } from './components/meSection/meSection';
import { InfoSection } from './components/infoSection/infoSection';
import { GithubOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

function App() {

  const meSectionRef = useRef<HTMLDivElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const workSection = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => { 
    if (ref.current) { 
      window.scrollTo({ top: ref.current.offsetTop - 50, behavior: 'smooth', }); 
    }
  }

  return (
    <div className='box'>
      <Header scroll={scrollToRef} meSectionRef={meSectionRef} contactsRef={contactsRef} infoSectionRef={infoSectionRef} workSection={workSection}/>
      <MeSection  ref={meSectionRef}/>
      <InfoSection ref={infoSectionRef}/>
      <section ref={workSection} className='section_work'  style={{backgroundColor:"#334a5b"}}>
        <div className='section_work_title'>
          МОИ <span>РАБОТЫ</span>
        </div>
        <div className='projects'>

        </div>
      {/* <div className="preview-block">
        <iframe src="https://tree3-d.vercel.app/" className="preview-iframe" allowFullScreen={true}></iframe>
        <div className="preview-title">Моё Приложение</div>
        <p className="preview-description">Описание</p>
        <a href="https://tree3-d.vercel.app/" target="_blank" className="preview-button">Посмотреть</a>
      </div> */}

      </section>


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
        <div className='footer_title'>
          <span>СВЯЗЬ</span> СО МНОЙ
        </div>
        <div className='footer_href_box'>
         <div className='footer_href'>
          <a  href='https://github.com/alexbon0000' target="blank" title='GitHub'>
            <GithubOutlined className='icon' />
          </a>
        </div>
        <div className='v_line'/>
        <div className='footer_href'>
          <a href='https://wa.me/89000160434' target="blank" title='WhatsApp'>
          <WhatsAppOutlined className='icon' />
          </a>
        </div>
        <div className='v_line'/>
        <div className='footer_href'>
          <a href="tel:+79000160434" target="blank" title='Мой номер'>
            <PhoneOutlined className='icon'/>
          </a>
        </div> 
        </div>
        
      </footer>

    </div>
  )
}

export default App
