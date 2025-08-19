import { styled } from "@stitches/react";

export const StyledButton = styled('button', {
    padding: "10px 16px",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: '$primary',
    color: '$foreground',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    border: 'none',
    '&:hover': {
        opacity: .7
    },
    '&.outline': {
        backgroundColor: 'transparent',
        border: '1px solid $foreground',
    },
    '&:disabled': {
        opacity: .5,
        cursor: 'not-allowed',
        pointerEvents: 'none'
    },
    '&.small': {
        fontSize: "12px",
        padding: "6px 12px"
    },
    '&.large': {
        fontSize: "16px",
        padding: "14px 20px"
    }
})