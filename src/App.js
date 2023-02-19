import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Details from "./components/Details";
import Home from "./components/Home";
import MapWeater from "./components/MapWeater";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapWeater />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
