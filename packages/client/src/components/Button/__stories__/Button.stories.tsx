import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "../index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export const Preview = Template.bind({});

Preview.args = {
  children: "Click me!",
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "I am disabled!",
  disabled: true,
};

export const Customized = Template.bind({});

Customized.args = {
  children: "I am BIG!",
  height: "100px",
  width: "200px",
  borderRadius: "50%",
  fontSize: "2rem",
};
