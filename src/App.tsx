import React from "react";
import "./App.css";
import FriendCard from "./components/FriendCard/FriendCard";

function App() {
  return (
    <>
      <h1 className="App">CARA-LLIBRE</h1>
      <span>LLISTAT D'AMICS:</span>
      <FriendCard />
    </>
  );
}

export default App;
