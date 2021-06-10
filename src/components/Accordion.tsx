import React, { ReactElement, useState } from "react";
import '../css/style.css';
import arrowUp from '../images/up-arrow.png';
import arrowDown from '../images/down-arrow.png';

export interface AccordionProps {
  subtitle: string;
  title: string;
  content: string;
  isOpened: boolean
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  content,
  isOpened
}: AccordionProps): ReactElement => {

  const [show, setShow] = useState(isOpened)
 

  const border = [
    "border-2",
    "border-black-100",
    "pl-8",
    "w-full",
    "focus:ring-blue-600",
    "pointer-events-auto",
  ]

  return (
    <div className={border.join(" ")} onClick={() => setShow(!show)} style={{borderLeftColor: show ? 'rgb(179, 188, 190)' : 'rgb(9, 153, 179)'}}> {/* ternary operator */}
      <img src={arrowDown} alt="arrow up/down" className="size" onClick={() => {arrowUp}}/>
      <div className="text-1xl pt-4" style={{color: show ? 'rgb(9, 153, 179)' : 'black'}}>
        {subtitle}
      </div>
      <div className="text-3xl pb-2 font-semibold">
        {title}
      </div>
      <div className={`pb-6 pr-20 ${show ? "" : "hidden"}`} >
        <p>{content}</p>
      </div>
    </div>
  );
};