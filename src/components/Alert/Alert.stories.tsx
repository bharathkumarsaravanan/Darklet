import type { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "../../ThemeProvider";
import { Alert } from "./Alert";
import { useState } from "react";
import { Button } from "../Button";

const meta: Meta<typeof Alert> = {
    title: "Component/Alert",
    component: Alert,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    decorators: [
        (Story, context) => (
            <ThemeProvider theme={context.globals.theme || "dark"} >
                <Story />
            </ThemeProvider>
        )
    ]
}

export const Default: Story = {
    args: {
        isOpen: false,
        title: "Success! Your changes have been saved",
        children: <p>This is an alert with icon, title and description.</p>,
    },
    render: (args) => {
        const [open, setOpen] = useState<boolean>(args.isOpen);
        return (
            <div style={{position: "relative", paddingTop: "40px"}}>
                <Button onClick={()=> setOpen(true)}>Click here!</Button>
                <Alert {...args} isOpen={open} closeAction={() => setOpen(false)} />
            </div>
        )
    }
}

export default meta;
export type Story = StoryObj<typeof Alert>