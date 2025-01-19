import { FunctionComponent } from "react";
import Button from "../../Button";
import { useTheme } from "./utils";

interface ContextProps {}

export const Context: FunctionComponent<ContextProps> = () => {
  const context = useTheme();

  return (
    <Button
      label={`Current theme is ${context.theme}`}
      onClick={context.toggleTheme}
    >
      Change theme
    </Button>
  );
};
