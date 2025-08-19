import { styled } from "@stitches/react";

export const StylesAlertDialog = styled("div", {
    maxWidth: "500px",
    backgroundColor: "$inputBg",
    border: "1px solid $inputBorder",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "5px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "20%"
});

export const StyledAlertDialogHeader = styled("div", {
    color: "$text",
    fontSize: "18px",
    padding: "20px 25px 10px 25px",
    fontFamily: "$default"
})

export const StyledAlertDialogBody = styled("div", {
    color: "$secondaryText",
    fontSize: "14px",
    padding: "10px 25px",
    fontFamily: "$default"
})

export const StyledAlertDialogActions = styled("div", {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    padding: "10px 25px",
    fontFamily: "$default"
})