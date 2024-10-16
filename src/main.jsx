import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardItem from "./CardItem.jsx";
import './main.scss';

const rates = [
  { id: "minimum", price: 300, speed: 10 },
  { id: "standart", price: 450, speed: 50 },
  { id: "maximum", price: 550, speed: 100 },
  { id: "vip", price: 1000, speed: 200 },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="cards-container">
      {rates.map((rate) =>
        <CardItem
          key={rate.id}
          rate={rate.id}
          price={rate.price}
          speed={rate.speed} />)}
    </div>
  </StrictMode>
);
