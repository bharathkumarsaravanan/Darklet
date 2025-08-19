import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "../../ThemeProvider";

const meta: Meta<typeof Button> = { 
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => (
        <ThemeProvider theme={context.globals.theme || "dark"}>
            <Story />
        </ThemeProvider>
    )
  ],
  argTypes: {
    variant: {
      options: ["filled", "outline"],
      control: { type: "radio" },
    },
    styles: {
      control: "object",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Click",
        variant: "filled",
    }
};

export const DarkOutlined: Story = {
    args: {
        children: "Click",
        variant: "outline",
    }
};

export const Disabled: Story = {
    args: {
        children: "Click",
        variant: "filled",
        disabled: true,
    }
};

export const OutlineDisabled: Story = {
  args: {
    disabled: true,
    variant: "outline",
    children: "Click",
  },
};
