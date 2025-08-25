import { styled } from "@stitches/react";
import dropdownArror from "../../assets/icons/dropdown-arrow.svg";

export const StyledInput = styled("input", {
    padding: "10px 15px",
    width: "100%",
    color: "$SelectText",
    backgroundImage: `url(${dropdownArror})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "15px",
    backgroundPosition: "90% center",
    "&:focus-visible": {
        outline: "1px solid $focusBorder",
    },
    variants: {
        variant: {
            regular: {
                border: "1px solid $regularSelectBorder",
                borderRadius: "5px",
                backgroundColor: "$regularSelectBg",
            },
            base: {
                border: "none",
                borderBottom: "1px solid $regularSelectBorder",
                borderRadius: "5px 5px 0px 0px",
                backgroundColor: "$regularSelectBg",
            },
            transparent: {
                border: "1px solid $regularSelectBorder",
                borderRadius: "5px",
                backgroundColor: "transparent",
            }
        }
    }
})


export const StyledDropdown = styled("div", {
    padding: "10px 15px",
    width: "100%",
    color: "$SelectText",
    backgroundColor: "$regularSelectBg",
    border: "1px solid $regularSelectBorder",
    borderRadius: "5px",
    position: "absolute",
    marginTop: "10px",
    maxHeight: "160px",
    overflowY: "auto",
    ".option": {
        padding: "8px",
        borderRadius: "5px",
        fontSize: "14px",
        "&:hover, &.selected": {
            backgroundColor: "$optionHover"
        }
    }
})