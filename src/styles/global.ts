import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "@font-face": {
        fontFamily: '"Nunito", sans-serif',
        src: "url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap')"
    },
    "#darklet-root *": {
        fontFamily: "'Nunito', sans-serif",
    },
    '*': { margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: '"Nunito", sans-serif'},
    body: {
        fontFamily: '$default',
        backgroundColor: '$background',
        color: '$foreground'
    },

    '::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '::-webkit-scrollbar-track': {
        backgroundColor: 'transparent', // Use your theme token
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '$inputBorder', // Use your theme token
        borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#757575',
    },
}) 