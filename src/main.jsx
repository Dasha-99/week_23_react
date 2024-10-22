import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardsContainer from "./assets/CardsContainer/CardsContainer";
import './main.scss';

const rates = [
  { id: "minimum", price: 300, speed: 10 },
  { id: "standart", price: 450, speed: 50 },
  { id: "maximum", price: 550, speed: 100 },
  { id: "vip", price: 1000, speed: 200 },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardsContainer rates={rates} />
  </StrictMode>
);
