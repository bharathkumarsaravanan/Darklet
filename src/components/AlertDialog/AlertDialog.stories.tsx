import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "../../ThemeProvider";
import { AlertDialog, AlertDialogHeader, AlertDialogBody, AlertDialogActions } from "./AlertDialog";
import { useState } from "react";
import { Button } from "../Button/Button";

const meta: Meta<typeof AlertDialog> = {
  title: "Component/AlertDialog",
  component: AlertDialog,
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
};

export const Default: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [open, setOpen] = useState<boolean>(args.isOpen);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AlertDialog isOpen={open}>
          <AlertDialogHeader>
              Are you absolutely sure?
          </AlertDialogHeader>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogBody>
          <AlertDialogActions yesAction={() => setOpen(false)} cancelAction={() => setOpen(false)}/>
        </AlertDialog>
      </>
      
    )
  }
}

export const DeleteAction: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [open, setOpen] = useState<boolean>(args.isOpen);

    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete</Button>
        <AlertDialog isOpen={open}>
          <AlertDialogHeader>
              Are you sure to delete this account?
          </AlertDialogHeader>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogBody>
          <AlertDialogActions> 
            <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
            <Button onClick={() => setOpen(false)} variant="danger">Yes, Delete</Button>
          </AlertDialogActions>
        </AlertDialog>
      </>
      
    )
  }
}

export const CloseAction: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [open, setOpen] = useState<boolean>(args.isOpen);

    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete</Button>
        <AlertDialog isOpen={open}>
          <AlertDialogHeader closeEnabled={true} closeAction={() => setOpen(false)}>
              Are you sure to delete this account?
          </AlertDialogHeader>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogBody>
          <AlertDialogActions> 
            <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
            <Button onClick={() => setOpen(false)} variant="danger">Yes, Delete</Button>
          </AlertDialogActions>
        </AlertDialog>
      </>
      
    )
  }
}



export default meta;
export type Story = StoryObj<typeof AlertDialog>;
