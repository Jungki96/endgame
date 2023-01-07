import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Submit from "../pages/Submit";
import List from "../pages/List";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
