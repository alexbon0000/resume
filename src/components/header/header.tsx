import "./header.css";

interface HeaderProps {
scroll: (ref: React.RefObject<HTMLElement>) => void;
meSectionRef: React.RefObject<HTMLElement>;
contactsRef: React.RefObject<HTMLElement>;
infoSectionRef: React.RefObject<HTMLElement>;
workSection: React.RefObject<HTMLElement>;
}
export const Header = (props:HeaderProps) => {
    const {meSectionRef, contactsRef, infoSectionRef} = props;
    return(
        <header>
        <ul className="menu-items">
                <li onClick={() => props.scroll(meSectionRef)}>Главная</li>
                <li onClick={() => props.scroll(infoSectionRef)}>Обо мне</li>
                <li onClick={() => props.scroll(contactsRef)}>Контакты</li>
              </ul>
      </header>
    )
}