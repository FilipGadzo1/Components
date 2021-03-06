import { Meta, Story } from "@storybook/react";

import { Accordion as AccordionComponent, AccordionProps } from "./Accordion";

export default {
  title: "Basics/Accordion",
  component: AccordionComponent,
} as Meta;

export const Accordion: Story<AccordionProps> = (args: AccordionProps) => (
  <AccordionComponent {...args} />
);

Accordion.args = {
  subtitle: "1. COURSE",
  title: "Fundamentals",
  content: "Test paragraph"
};


Accordion.argTypes = {
  isOpened: { control: { disable: true } },
};
