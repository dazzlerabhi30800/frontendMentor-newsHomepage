import React from "react";
import "./App.css";
import FirstSection from "./Components/FirstSection";
import Header from "./Components/Header";
import HotNews from "./Components/HotNews";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FirstSection />
        <HotNews />
      </main>
    </div>
  );
}

export default App;
