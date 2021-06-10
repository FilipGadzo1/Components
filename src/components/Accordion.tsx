import React, { ReactElement, useState } from "react";
import '../css/style.css';

export interface AccordionProps {
  subtitle: string;
  title: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle
}: AccordionProps): ReactElement => {
  const initialStyling = "pb-6 pr-20";
  const content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore facere recusandae magni voluptatem dolorem,'
  + 'eligendi aperiam eum, quis debitis explicabo incidunt minima cumque velit unde blanditiis quasi iusto doloremque.';
  const [text, setText] = useState('');
  const [colorChange, setColorChange] = useState(false);

function showContent(event: any){
    setText(content);
    setColorChange(true);
}

  const border = [
    "border-2",
    "border-black-100",
    "pl-6",
    "w-2/5",
    "focus:ring-blue-600",
    "pointer-events-auto",
  ]

  return (
    <div className={border.join(" ")} onClick={showContent} style={{borderLeftColor: colorChange ? 'rgb(179, 188, 190)' : 'rgb(9, 153, 179)'}}>
      <div className="text-1xl pt-4" style={{color: colorChange ? 'rgb(9, 153, 179)' : 'black'}}>
        {subtitle}
      </div>
      <div className="text-3xl pb-2 font-semibold">
        {title}
      </div>
      <div className={initialStyling}>
        <p>{text}</p>
      </div>
    </div>
  );
};