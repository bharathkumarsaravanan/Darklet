import type { StoryObj, Meta } from "@storybook/react";
import { Select } from "./Select";
import { ThemeProvider } from "../../ThemeProvider";
import { useState } from "react";
import type { OptionType } from "./Select";

const meta: Meta<typeof Select> = {
    title: "Component/Select",
    component: Select,
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
        placeholder: "Placeholder text",
    },
    render: (args) => {
        const [options, setOptions] = useState<OptionType[]>(
            [
                {
                    key: "React",
                    value: "react"
                },
                {
                    key: "Next",
                    value: "next"
                },
                {
                    key: "Javascript",
                    value: "js"
                },
                {
                    key: "Typescript",
                    value: "typescript"
                },
                {
                    key: "Angular",
                    value: "angular"
                },
                 {
                    key: "Swelte",
                    value: "swelte"
                },
                 {
                    key: "Vuejs",
                    value: "vuejs"
                },
            ]
        );


        const [selectedVal, setSelectedVal]= useState<OptionType[]>([{
            key: "Javascript",
            value: "js"
        }])



        return (
            <div>
                <Select 
                    {...args} 
                    selected={selectedVal}
                    options={options} 
                    onOptionChange={(option) => setSelectedVal([option])}
                />
            </div>
        )
    }
}


export default meta;
export type Story = StoryObj<typeof Select>