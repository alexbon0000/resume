import { forwardRef } from "react";
import "./meSection.css";

export const MeSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className='me_section' style={{backgroundColor:"#334a5b"}}>
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
    )
})