import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import "../src/storybook.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      current: 'dark',
      dark: themes.dark,
      light: themes.light
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValud: "dark",
    toolbar: {
      icon: "circlehollow",
      items: ["light" , "dark"]
    }
  }
}

// Ensure #portal exists for React.createPortal
const ensurePortal = () => {
  if (!document.getElementById("portal")) {
    const portalRoot = document.createElement("div");
    portalRoot.id = "portal";
    document.body.appendChild(portalRoot);
  }
};
ensurePortal();

export default preview;
