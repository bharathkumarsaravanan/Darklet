import type { StoryObj, Meta } from "@storybook/react";
import { InputBox } from "./InputBox";
import { ThemeProvider } from "../../ThemeProvider";
import ShareIcon from "../../assets/icons/share.svg";
import React from "react";

const meta: Meta<typeof InputBox> = {
    title: "Component/InputBox",
    component: InputBox,
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
    ]
}

export default meta;

type Story = StoryObj<typeof InputBox>

export const Default: Story = {
    args: {
        type: "text",
        autoFocus: true
    }
}

export const SearchInput: Story = {
    args: {
        type: "search",
        autoFocus: true
    }
}

export const PrefixIcon: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Prefix Icon",
        prefixIcon: ShareIcon
    }
}

export const DisabledInput: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Prefix Icon",
        disabled: true,
        value: "Disabled Input"
    }
}

export const OnChange: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Value change",
        
        handleChange: (val) => console.log(val)
    }
}

export const ValueChange: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Value change",
        value: "Default value",
        handleChange: (val) => console.log(val)
    }
}

export const DebounceChange: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Prefix Icon",
        isDeferred: true,
        handleChange: (val) => console.log(val)
    }
}

export const Interactive: Story = {
    args: {
        type: "text",
        autoFocus: true,
        placeholder: "Value change",
        value: "Default value"
    },
    render: (args) => {
        const [val, setVal] = React.useState<string>(args.value);
        return (
            <InputBox
                {...args}
                value={val}
                handleChange={(newVal) => setVal(newVal)}
            />
        )
    }
}
