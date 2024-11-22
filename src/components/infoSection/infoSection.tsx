import { forwardRef } from "react";
import "./infoSection.css";

export const InfoSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} style={{backgroundColor:"#7395AE"}}>
        <div className='work_info_section'>
          <h1>ОБРАЗОВАНИЕ</h1>
          <div className="steps_box">
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
                  <br/><span>Специальность -<br/>"Операционная деятельность в логистике"</span>
                  </div>
                  <div className="v_line"/>
                  <div  className="info_step">Федеральное государственное бюджетное образовательное учреждение высшего образования «Тверской государственный технический университет»
                  <br/><span>Специальность -<br/>"Информационные системы и технологии"</span>
                  </div>
              </div>
          </div>
          
          <div className="skills_box">
            <div className="skills_info">
              <div className="skills_section">
                <h2>ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ</h2>
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
              <div className="quality_section">
                <h2>ЛИЧНЫЕ КАЧЕСТВА</h2>
                <div className="quality_list">
                    <div className="quality">
                      <div className="quality_text">ОТВЕТСТВЕННОСТЬ</div>
                      <progress value="100" max="100"></progress>
                    </div>
                    <div className="quality">
                    <div className="quality_text">РАБОТА В КОМАНДЕ</div>
                      <progress value="70" max="100"></progress>
                    </div>
                    <div className="quality">
                    <div className="quality_text">ПУНКТУАЛЬНОСТЬ</div>
                      <progress value="80" max="100"></progress>
                    </div>
                    <div className="quality">
                    <div className="quality_text">ВНИМАТЕЛЬНОСТЬ</div>
                      <progress value="90" max="100"></progress>
                    </div>
                    <div className="quality">
                    <div className="quality_text">ОБУЧАЕМОСТЬ</div>
                      <progress value="100" max="100"></progress>
                    </div>
                    <div className="quality">
                      <div className="quality_text">КРЕАТИВНОСТЬ</div>
                      <progress value="70" max="100"></progress>
                    </div>
                    <div className="quality">
                    <div className="quality_text">ГРАМОТНОСТЬ</div>
                      <progress value="100" max="100"></progress>
                    </div>
                </div>
                
              </div>
            </div>
            <div className="skills_title">
              <div>
                ЗНАНИЯ 
                <br/>
                <span className="skill_center">
                  УМЕНИЯ
                </span>
                <br/>
                <span className="skill_last">
                  НАВЫКИ
                </span>
              </div>
            </div>
          </div>
        </div>        
      </section>
    )
})