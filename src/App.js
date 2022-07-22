import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeasonContext from "./context/SeasonContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Division from "./components/Division";
import Cup from "./components/Cup";
import { useState } from "react";

const App = () => {
  const seasons = ["2022-23", "2021-22"];

  const [season, setSeason] = useState(seasons[0]);

  return (
    <SeasonContext.Provider value={[season, setSeason]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="division/:division" element={<Division />} />
            <Route path="cups/:cup" element={<Cup />} />
          </Route>
        </Routes>
    </BrowserRouter>;
  </SeasonContext.Provider>
  );
};

export default App;
