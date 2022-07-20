import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Division from "./components/Division";
import Cup from "./components/Cup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="division/:division" element={<Division />} />
          <Route path="cups/:cup" element={<Cup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
