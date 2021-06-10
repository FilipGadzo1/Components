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
  const initialStyling = "pb-6 pr-18";
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, neque quam sequi praesentium'
  + 'magnam quidem aliquam, quo a earum repudiandae, temporibus perferendis obcaecati aliquid dolorem iusto impedit nulla possimus iure.';
  const [text, setText] = useState('');

function showContent(event: any){
    setText(content);
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
    <div className={border.join(" ")} onClick={showContent}>
      <div className="text-1xl pt-4">
        {subtitle}
      </div>
      <div className="text-3xl pb-4 font-semibold">
        {title}
      </div>
      <div className={initialStyling}>
        <p>{text}</p>
      </div>
    </div>
  );
};