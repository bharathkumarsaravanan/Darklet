// src/stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      text: '#111111',
      secondaryText: '#242424',
      background: '#ffffff',
      primary: '#66aaff',
      foreground: '#000',
      inputPlaceHolder: '#637887',
      inputBg: '#F0F2F5',
      inputBorder: '#DBE0E5',
      inputTxtColor: "#242424",
      dangerBorder: "#c80202ff",
      dangerText: "#fff",

    },
    fonts: {
      default: '"Nunito", sans-serif',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    text: '#ffffff',
    secondaryText: 'rgba(172, 171, 171, 1)',
    background: '#111111',
    primary: '#1868DB',
    foreground: '#ffffff',
    inputPlaceHolder: '#535353ff',
    inputBg: '#242424',
    inputBorder: '#535353ff',
    inputTxtColor: "#EEEEEE",
    dangerBorder: "#510E1C",
    dangerText: "#FF8A88",
  }
})
