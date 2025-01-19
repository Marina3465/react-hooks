import { FunctionComponent, ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
