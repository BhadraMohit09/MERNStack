// import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";
import GetAll from "./Components/GetAll";
import GetByID from "./Components/GetByID";
import Update from "./Components/Update";
import AddData from "./Components/AddData";
import NavBar from "./Components/NavBar";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetAll />} />
      <Route path="/:id" element={<GetByID />} />
      <Route path="/:id/update" element={<Update />} />
      <Route path="/add" element={<AddData />} />
    </Routes>
  </BrowserRouter>
);
