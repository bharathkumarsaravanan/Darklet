import { styled } from "@stitches/react";

export const StyledAlert = styled("div", {
    position: "absolute",
    left: "0",
    right: "0",
    backgroundColor: "$regularDangerBg",
    border: "1px solid $regularDangerBorder",
    display: "flex",
    alignItems: "initial",
    justifyContent: "flex-start",
    gap: "15px",
    borderRadius: "5px",
    padding: "10px 15px",
    width: "100%",
    fontFamily: "Nunito",
    variants: {
       variant: {
            regular: {
                border: "1px solid $alertRegularBorder",
                backgroundColor: "$alertRegularBg"
            },
            success: {
                border: "1px solid $alertSuccessBorder",
                backgroundColor: "$alertSuccessBg"
            },
            danger: {
                border: "1px solid $alertDangerBorder",
                backgroundColor: "$alertDangerBg"   
            },
            warning: {
                border: "1px solid $alertWarningBorder",
                backgroundColor: "$alertWarningBg"
            }
       },
    },
    "img[alt='close']": {
        position: "absolute",
        right: "10px",
        top: "5px"
    }
})

export const StyledTitle = styled("p", {
    fontSize: "16px",
    margin: "0",
    variants: {
        variant: {
            regular: {
                color: "$alertRegularTitle",
            },
            success: {
                color: "$alertSuccessTitle",
            },
            danger: {
                color: "$alertDangerTitle",
            }, 
            warning: {
                color: "$alertWarningTitle",
            }
        }
    }
})

export const StyledChildren = styled("div", {
    width: "100%",
    fontSize: "14px",
    marginTop: "5px",
    "p": {
        margin: "0"
    },
    variants: {
        variant: {
            regular: {
                color: "$alertRegularDesc"
            },
            success: {
                color: "$alertSuccessDesc"
            },
            danger: {
                color: "$alertDangerDesc"
            },
            warning: {
                color: "$alertWarningDesc"
            }
        }
    }
})