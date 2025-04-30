import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("system");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "system";
        applyTheme(saved);
        setTheme(saved);
    }, []);

    const applyTheme = (mode) => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else if (mode === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
        localStorage.setItem("theme", mode);
    };

    const handleThemeChange = (mode) => {
        setTheme(mode);
        applyTheme(mode);
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easier usage
export const useTheme = () => useContext(ThemeContext);
