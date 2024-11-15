
import { DownOutlined } from '@ant-design/icons'
import './App.css'
import { useRef } from 'react'

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
          <div className='myFase'>
            <img src='./src/assets/myFace.png'/>
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
      <section ref={aRef} style={{backgroundColor:"rgb(40, 100, 72)"}}>
        Content
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
