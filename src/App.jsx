import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
