import { forwardRef } from "react";
import "./infoSection.css";

export const InfoSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} style={{backgroundColor:"#7395AE"}}>
        <div className='work_info_section'>
          <h1>ОБРАЗОВАНИЕ</h1>
          <div className='steps'>
              <div className='step_box'/>
              <div>2007 - 2016</div>
              <div className='line'/>
              <div className='step_box'/>
              <div>2016 - 2019</div>
              <div className='line'/>
              <div className='step_box'/>
              <div>2021 - по н. в.</div>
          </div>
          <div className="info_steps_box">
              <div className="info_step">Муниципальное бюджетное общеобразовательное учреждение г. Ивантеевка Городского округа Пушкинский Московской области <br/>
              «Образовательный центр №5»</div>
              <div className="v_line"/>
              <div  className="info_step">Автономная некоммерческая образовательная организация высшего образования Центросоюза Российской Федерации «Российский университет кооперации» 
                <br/> <span>Специальность - "Операционная деятельность в логистике"</span>
              </div>
              <div className="v_line"/>
              <div  className="info_step">Федеральное государственное бюджетное образовательное учреждение высшего образования «Тверской государственный технический университет»
              <br/> <span>Специальность - "Информационные системы и технологии"</span>
              </div>
          </div>
        </div>        
      </section>
    )
})