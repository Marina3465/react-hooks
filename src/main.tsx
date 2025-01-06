import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeColor } from "./components/Hooks/Context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeColor.Provider value={{ theme, toggleTheme }}>
    <App />
  </ThemeColor.Provider>
);
