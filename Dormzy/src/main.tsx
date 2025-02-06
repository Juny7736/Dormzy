import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./HomePage/HomePage.css";
import HomePage from "./HomePage/HomePage.tsx";
import "./Header/Header.css";
import Header from "./Header/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
    <Header />
  </StrictMode>
);
