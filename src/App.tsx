import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import GlobalState from "../src/context/GlobalState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <GlobalState> */}
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      {/* </GlobalState> */}
    </div>
  );
}

export default App;