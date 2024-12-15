
import './App.css'
import { useRef } from 'react'
import { Header } from './components/header/header';
import { MeSection } from './components/meSection/meSection';
import { InfoSection } from './components/infoSection/infoSection';
import { Footer } from './components/footer/footer';

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
      <Footer ref={contactsRef}/>
    </div>
  )
}

export default App
