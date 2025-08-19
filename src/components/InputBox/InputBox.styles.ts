import { styled } from "@stitches/react";
import searchIcon from "../../assets/icons/search.svg";
import closeIcon from "../../assets/icons/close.svg";

export const StyledInput = styled("input", {
    width: "100%",
    border: "1px solid $inputBorder",
    backgroundColor: "$inputBg",
    padding: "10px 15px",
    fontSize: "14px",
    color: "$inputTxtColor",
    borderRadius: "5px",
    backgroundSize: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    "&:disabled": {
        opacity: ".5"
    },
    "&::placeholder": {
        color: "$inputPlaceHolder"
    },
    "&:focus-visible": {
        border: "1px solid $inputBorder",
        outline: "none"
    },
    "&[type='search']": {
        paddingLeft: "35px",
        backgroundImage: `url(${searchIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10px center",
        backgroundSize: "15px",
        "&::-webkit-search-cancel-button": {
            "-webkit-appearance": "none",
            appearance: "none",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundImage: `url(${closeIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            "&:hover": {
                cursor: "pointer"
            }
        }
    },
    "&.outline": {
        backgroundColor: "transparent",
    }
})