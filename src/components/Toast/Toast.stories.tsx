import type { StoryObj, Meta } from "@storybook/react";
import { Toast, ToastTitle, ToastActions, ToastDescription } from "./Toast";
import { ThemeProvider } from "../../ThemeProvider";
import { useState } from "react";
import { Button } from "../Button/Button";

const meta: Meta<typeof Toast> = {
    title: "Component/Toast",
    component: Toast,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    decorators: [
        (Story, context) => (
            <ThemeProvider theme={context.globals.theme || "dark"}>
                <Story />
            </ThemeProvider>
        )
    ]
}

export const Default: Story = {
    args: {
        isOpen: false
    },
    render : args => {
        const [open, setOpen] = useState<boolean>(args.isOpen);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Toast</Button>
                <Toast isOpen={open}>
                    <ToastTitle>Schedule Catch up</ToastTitle>
                    <ToastDescription>Wednesday, August 27, 2025 at 11:18 PM</ToastDescription>
                    <ToastActions position="top-right">
                        <Button>Undo</Button>
                    </ToastActions>
                </Toast>
            </>
        )
    }
}

export default meta;
export type Story = StoryObj<typeof Toast>;