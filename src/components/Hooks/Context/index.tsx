import { createContext, FunctionComponent, useState } from "react";
import Button from "../../Button";

interface ContextProps {}

export const ThemeColor = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const Context: FunctionComponent<ContextProps> = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button label={`Current theme is ${theme}`} onClick={toggleTheme}>
      Change theme
    </Button>
  );
};
