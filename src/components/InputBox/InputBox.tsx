import React, {useEffect, useRef, useState, useDeferredValue} from "react";
import { StyledInput } from "./InputBox.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    autoFocus?:boolean,
    variant?: "filled" | "outline",
    prefixIcon?: string | boolean,
    handleChange: (val:string) => void,
    isDeferred?: boolean,
    value: string
}

export const InputBox = ({
    autoFocus = false,
    type = "text",
    variant = "filled",
    prefixIcon = false,
    placeholder= "",
    handleChange,
    value="",
    ...rest

}: InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState<string>(value);
    const delay:number = 500;

    useEffect(() => {
        if (autoFocus && inputRef?.current) {
            inputRef?.current?.focus()
        }
        console.log(prefixIcon, typeof prefixIcon)
    }, [autoFocus]);

    useEffect(() => {
        const handler = setTimeout(() => {
            rest.isDeferred && handleChange && handleChange(input)
        }, delay)

        return () => clearTimeout(handler)
    }, [input])

    return (
        <StyledInput 
            style={typeof prefixIcon === "string" ? {backgroundImage: prefixIcon ? `url(${prefixIcon})` : "", paddingLeft: "35px"}: {}} 
            className={variant} 
            ref={inputRef} 
            type={type} 
            placeholder={placeholder}
            value={value}
            disabled={rest.disabled}
            onChange={(e) => {
                !rest.isDeferred ?
                handleChange && handleChange(e.target.value) :
                setInput(e.target.value)
            }}
        />
    )
}