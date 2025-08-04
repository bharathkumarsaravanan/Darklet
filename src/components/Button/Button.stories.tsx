import type{ StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";

const meta:Meta<typeof Button> = {
    title: 'Component/Button',
    component: Button,
    parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
        options: ['dark', 'light', 'outline'],
        control: { type: "radio" }
    },
    styles: {
        control: "object"
    },
    size: {
        control: "select",
        options: ['small', 'medium', 'large']
    },
    disabled: {
        control: "boolean"
    }
  }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render:() => <Button>Click</Button>
}