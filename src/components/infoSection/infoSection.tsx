import { forwardRef } from "react";
import "./infoSection.css"

export const InfoSection = forwardRef<HTMLDivElement>((props, ref) => {
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
        </div>        
      </section>
    )
})