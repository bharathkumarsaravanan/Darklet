import React, {useEffect} from "react";
import { darkTheme } from "./stitches.config";

export const ThemeProvider = ({
    theme = "light",
    children
}: {
    theme?: "light" | "dark";
    children: React.ReactNode;
}) => {
    useEffect(() => {
        const classlist = document.documentElement.classList;
        if (theme === "dark") {
            classlist.add(darkTheme)
        } else {
            classlist.remove(darkTheme)
        }
    }, [theme])

    return <>{children}</>
}