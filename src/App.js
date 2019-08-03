import React from "react";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import FreeCell from "./components/FreeCell";
import Target from "./components/Target";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <FreeCell>
        <TopBar />
        <Target />
        <Random />
      </FreeCell>
      <Navigation />
    </div>
  );
}

export default App;
