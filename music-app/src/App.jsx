import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import DisplayHome from "./components/DisplayHome";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar></Sidebar>
        <Display></Display>
      </div>
      <Player />
    </div>
  );
};

export default App;
