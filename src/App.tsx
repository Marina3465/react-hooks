import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import {
  State,
  Effect,
  Params,
  Location,
  Navigate,
  Context,
  Callback,
  Memo,
  Reducer,
} from "./components/Hooks";
import { useTheme } from "./components/Hooks/Context/utils";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--background-color",
        "#ffffff"
      );
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#333333"
      );
    }
  }, [theme]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<State />} />
        <Route path="useEffect" element={<Effect />} />
        <Route path="useParams/id/:id/text/:text" element={<Params />} />
        <Route path="useLocation" element={<Location />} />
        <Route path="useNavigate" element={<Navigate />} />
        <Route path="useContext" element={<Context />} />
        <Route path="useCallback" element={<Callback />} />
        <Route path="useMemo" element={<Memo />} />
        <Route path="useReducer" element={<Reducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
