import React, { ReactElement } from "react";

export interface AccordionProps {
  title: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title
}:
AccordionProps): ReactElement => {


  return (
    <div className="text-blue-500">
      HI
    </div>
  );
};
