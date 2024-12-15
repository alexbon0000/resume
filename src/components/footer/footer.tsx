import { GithubOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { forwardRef } from "react";
import "./footer.css"


export const Footer =  forwardRef<HTMLDivElement>((_,ref) => {
    return  <footer ref={ref}>
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
})