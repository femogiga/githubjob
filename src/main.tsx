import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/profile/Details.js";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/job" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
