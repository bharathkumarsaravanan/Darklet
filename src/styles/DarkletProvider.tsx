import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { globalStyles } from "./global";
import { ThemeProvider } from "../ThemeProvider";

type Props = {
  children: ReactNode;
};

export const DarkletProvider = ({ children }: Props) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  globalStyles();

  return <div>{children}</div>;
};
