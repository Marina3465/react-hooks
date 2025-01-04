import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Effect from "./components/Hooks/Effect";
import State from "./components/Hooks/State";
import Header from "./components/Header";
import Params from "./components/Hooks/Params";
import Locations from "./components/Hooks/Locations";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<State />} />
        <Route path="useEffect" element={<Effect />} />
        <Route path="useParams/id/:id/text/:text" element={<Params />} />
        <Route path="useLocations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
