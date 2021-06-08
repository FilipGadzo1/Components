import React, { ReactElement } from "react";

export interface AccordionProps {
  title: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title
}: AccordionProps): ReactElement => {
  return (
    <div className="border-2 border-black-100 border-opacity-100 pl-6 w-3/5">
      <div className="text-3xl pt-1 pb-4 font-semibold">
        {title}
      </div>
      <div className="pb-6 pr-24">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, neque quam sequi praesentium magnam quidem aliquam,
        quo a earum repudiandae, temporibus perferendis obcaecati aliquid dolorem iusto impedit nulla possimus iure.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, neque quam sequi praesentium magnam quidem aliquam,
        quo a earum repudiandae, temporibus perferendis obcaecati aliquid dolorem iusto impedit nulla possimus iure.
        </p>
      </div>
    </div>
  );
};
