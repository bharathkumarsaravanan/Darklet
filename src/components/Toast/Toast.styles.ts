import { styled } from "@stitches/react";

export const StyledToast = styled("div", {
    position: "fixed",
    maxWidth: "500px",
    backgroundColor: "$inputBg",
    border: "1px solid $inputBorder",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(3, 1)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    borderRadius: "5px",
    "&:has(.actions.top-right)" : {
        gridTemplateColumns: "repeat(2, 1)",
        gridTemplateRows: "repeat(2, 1)"
    },
    "&.bottom-right": {
        bottom: "30px",
        right: "10px",
    }
});

export const StyledToastTitle = styled("div", {
    color: "$text",
    fontSize: "16px",
    padding: "15px 25px 0px 25px",
    fontFamily: "$default",
    position: "relative",
    "&~..actions.top-right" : {
        gridArea: "2 / 1 / 3 / 2"
    }
})

export const StyledToastDescription= styled("div", {
    color: "$secondaryText",
    fontSize: "14px",
    padding: "10px 25px",
    fontFamily: "$default",
    "&~..actions.top-right" : {
        gridArea: "1 / 1 / 2 / 2" 
    }
})

export const StyledToastActions = styled("div", {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-start",
    padding: "10px 25px",
    fontFamily: "$default",
    "&.top-right": {
        gridArea: "1 / 2 / 2 / 3"
    }
})