import React from "react";
import Elision from "../images/ELI_logo.png";
import Thankyou from "../images/thankyou.png";

export const Screen = () => {
  return (
    <div className="items-wrapper">
      <div className="item">
        <img src={Elision} alt="elision logo" />
        <p>Elision</p>
      </div>

      <div className="item">
        <img src={Thankyou} alt="thankyou" />
        <p>Dankwoord</p>
      </div>
    </div>
  );
};
