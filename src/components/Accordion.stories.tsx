import { Meta, Story } from "@storybook/react";
import React from "react";

import { Accordion as AccordionComponent, AccordionProps } from "./Accordion";

export default {
  title: "Basics/Accordion",
  component: AccordionComponent,
} as Meta;

export const Accordion: Story<AccordionProps> = (args: AccordionProps) => (
  <AccordionComponent {...args} />
);

Accordion.args = {
  title: "Fundamentals",
};
