import React, { useRef, useEffect } from "react";
import Elision from "../images/ELI_logo.png";
import Thankyou from "../images/thankyou.png";
import WindowsFolder from "../images/windows-xp-folder.png";
import VueX from "../images/vuex.png";
import Firebase from "../images/firebase.png";
import Cronos from "../images/cronos.png";
import SAP from "../images/sap.png";
import SapGold from "../images/sap-gold.png";
import Xplore from "../images/Xplore-Group-logo.png";
import Scrum from "../images/scrum.png";
import { Item } from "./Item";

export const Screen = () => {
  const learnedEl = useRef(null);
  const elisionEl = useRef(null);
  // const appreciateEl = useRef(null)

  useEffect(() => {
    elisionEl.current.style.dipsplay = "none";
    learnedEl.current.style.display = "none";
  }, []);

  function elisionFolder() {
    elisionEl.current.style.display = "none";
  }

  function learnedFolder() {
    learnedEl.current.style.display = "none";
  }

  return (
    <div>
      <div className="items-wrapper">
        <div onClick={() => (elisionEl.current.style.display = "")}>
          <Item image={Elision} text="Elision" />
        </div>
        <Item image={Thankyou} text="Appreciatie" />
        <div onClick={() => (learnedEl.current.style.display = "")}>
          <Item image={WindowsFolder} text="Wat heb ik geleerd?" />
        </div>
      </div>

      <div className="folder-screen learned" ref={learnedEl}>
        <div className="folder-screen-items">
          <Item image={VueX} text="Vuex" />
          <Item image={Firebase} text="Google Firebase" />
          <Item image={Scrum} text="Scrum technieken" />

          <div className="btn-close" onClick={learnedFolder}>
            x
          </div>
        </div>
      </div>

      <div className="folder-screen elision" ref={elisionEl}>
        <div className="folder-screen-items">
          <Item image={Cronos} text="Cronos group" />
          <Item image={SAP} text="SAP" />
          <Item image={SapGold} text="SAP Gold partner" />
          <Item image={Xplore} text="Xplore Group" />

          <div className="btn-close" onClick={elisionFolder}>
            x
          </div>
        </div>
      </div>
    </div>
  );
};
