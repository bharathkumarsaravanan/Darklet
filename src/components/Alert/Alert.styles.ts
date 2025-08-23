import { styled } from "@stitches/react";

export const StyledAlert = styled("div", {
    backgroundColor: "$regularDangerBg",
    border: "1px solid $regularDangerBorder",
    display: "flex",
    alignItems: "initial",
    justifyContent: "flex-start",
    gap: "5px",
})

export const StyledTitle = styled("p", {
    color: "$regularDangerTitle",
    fontSize: "14px"
})