import React from "react";
import "./style.css";
import dragon1 from "./images/dragon_1.jpg";
import dragon2 from "./images/dragon_2.jpg";
import dragon3 from "./images/dragon_3.jpg";
import dragon4 from "./images/dragon_4.jpg";
import dragon5 from "./images/dragon_5.jpg";
import dragon6 from "./images/dragon_6.jpg";
import dragon7 from "./images/dragon_7.jpg";
import dragon8 from "./images/dragon_8.jpg";
import dragon9 from "./images/dragon_9.jpg";
import dragon10 from "./images/dragon_10.jpg";

const SliderAnimation = () => {
  // Create an array of all dragon images
  const dragonImages = [
    dragon1, dragon2, dragon3, dragon4, dragon5,
    dragon6, dragon7, dragon8, dragon9, dragon10
  ];

  return (
    <div className="banner w-screen ">
      <div className="slider" style={{ "--quantity": 10 }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div className="item pb-4 " key={i} style={{ "--position": i + 1 }}>
            <img src={dragonImages[i]} alt={`dragon ${i + 1}`} />

          </div>
        ))}
      </div>
      <div className="content">
        <div className="model"></div>
      </div>
    </div>
  );
};

export default SliderAnimation;
