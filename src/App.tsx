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
} from "./components/Hooks";

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
