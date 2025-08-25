import React, { useState, useRef, useEffect } from "react";
import { StyledInput, StyledDropdown } from "./Select.styles";

export type OptionType = {
    key: string,
    value: string,
}

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "regular" | "base" | "transparent";
    options: OptionType[];
    selected: OptionType[];
    onOptionChange: (option:OptionType) => void;
}

export const Select: React.FC<SelectProps> =  (
    {
        placeholder="Enter the value",
        variant="regular",
        ...rest
    }
) => {

    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [selectOptions, setSelectOptions] = useState<OptionType[]>(rest.options);
    const [inputValue, setInputValue] = useState<string>(rest.selected[0].key);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleOptionChange = (option: OptionType):void => {
        rest.onOptionChange(option);
        setInputValue(option.key);
        setOpenDropdown(false);
    }

    const onInputChange = (e: any) => {
        let { value } = e.target;
        setInputValue(value);
        setSelectOptions(prev => {
            if (value !== "") {
                return prev.filter(obj => {
                    let listLC = obj.key.toLowerCase();
                    let valLC = value.toLowerCase();
                    return listLC.startsWith(valLC)
                })
            }
            return rest.options
        });
    }

    const handleClickOutside = (event: MouseEvent) => {
        console.log("clicked")
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setOpenDropdown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [])
    
    return(
        <div ref={selectRef} style={{width: "100%", position: "relative"}}>
            <StyledInput 
                value={inputValue}  
                placeholder={placeholder} 
                variant={variant} 
                onChange={onInputChange}
                type="text"
                onFocus={() => setOpenDropdown(true)}
            />
            {
                openDropdown &&
                (
                    <StyledDropdown>
                        {
                            selectOptions.map((op:OptionType, index:number) => {
                                return (
                                    <div 
                                        key={index} 
                                        className={`option ${rest.selected.find(e => e.value == op.value) ? "selected" : ""}`} 
                                        onClick={() => handleOptionChange({key : op.key, value: op.value})}
                                        >
                                        {op.key}
                                    </div>
                                )
                            })
                        }

                    </StyledDropdown>
                )
                
            }
            
        </div>
    )
}

