import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export const Preview = Template.bind({});

Preview.args = {
  children: "Text",
};
