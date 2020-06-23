import React from "react";
import "./scss/App.scss";
import { BottomBar } from "./components/BottomBar";
import { Screen } from "./components/Screen";

function App() {
  return (
    <div className="App">
      <Screen></Screen>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
