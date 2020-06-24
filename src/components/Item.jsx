import React from "react";

export const Item = ({ image, text }) => {
  return (
    <div className="item">
      <img src={image} alt="icon" />
      <p>{text}</p>
    </div>
  );
};
